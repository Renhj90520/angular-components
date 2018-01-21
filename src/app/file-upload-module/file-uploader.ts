import { EventEmitter } from '@angular/core';
import { FileItem } from './file-item';
import { scan } from 'rxjs/operator/scan';

export class FileUploader {
    authToken: string;
    queue: FileItem[] = [];
    // response: EventEmitter<any>;
    isUploading = false;
    url: string;
    completeNum = 0;
    autoUpload = false;
    upAll = false;

    constructor(URL: string, token: string, autoU: boolean) {
        // this.response = new EventEmitter<any>();
        this.url = URL;
        this.authToken = token;
        this.autoUpload = autoU;
    }

    addToQueue(files): void {
        for (let i = 0; i < files.length; i++) {
            this.queue.push(new FileItem(this, files[i]));
        }
        if (this.autoUpload) {
            this.uploadAll();
        }
    }

    removeFromQueue(item: FileItem): void {
        const index = this.queue.indexOf(item);
        if (item.isUploading) {
            item.onCancel();
        } else {
            this.completeNum--;
        }
        this.queue.splice(index, 1);
    }

    clearQueue(): void {
        this.queue.forEach(item => item.remove());
        this.completeNum = 0;
    }

    uploadItem(item: FileItem) {
        item.prepareToUpload();
        if (this.isUploading) { return; }
        this.isUploading = true;
        this.xhrTransport(item);
    }

    cancelItem(item: FileItem) {
        if (item && item.isUploading) {
            item.xhr.abort();
        }
    }

    uploadAll() {
        this.queue.forEach(item => {
            item.prepareToUpload();
        });
        const readyItem = this.getReadytItems()[0];
        this.upAll = true;
        if (readyItem) {
            readyItem.upload();
        }
    }

    cancelAll() {
        this.queue.forEach(item => item.onCancel());
    }

    isFile(file) {
        return (File && file instanceof File);
    }

    destory() {
        return void 0;
    }

    onErrorItem(item: FileItem, response: string) {
        item.onError(response);
        this.isUploading = false;
        if (this.autoUpload || this.upAll) {
            const next = this.getReadytItems()[0];
            if (next) {
                next.upload();
            }
        }
    }

    onCompleteItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) {
        item.onComplete(response);
        this.completeNum++;
        this.isUploading = false;
        if (this.autoUpload || this.upAll) {
            const next = this.getReadytItems()[0];
            if (next) {
                next.upload();
            }
        }

    }
    onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) {
        item.onSuccess(response);
    }
    onProgressItem(item: FileItem, progress) {
        console.log('progress');
        console.log(progress);
        item.onProgress(progress);
    }

    onCancelItem(item: FileItem) {
        item.onCancel();
    }
    getReadytItems() {
        return this.queue.filter(item => item.isReady && !item.isUploading && !item.isUploaded);
    }
    protected _parseHeaders(headers: string): ParsedResponseHeaders {
        const parsed = {};
        if (headers) {
            headers.split('\n').forEach(header => {
                const i = header.indexOf(':');
                const key = header.slice(0, i).trim().toLowerCase();
                if (key) {
                    const val = headers.slice(i).trim();
                    parsed[key] = parsed[key] ? parsed[key] + ',' + val : val;
                }
            });
            return parsed;
        } else {
            return parsed;
        }
    }
    protected isSuccess(status: number) {
        return (status >= 200 && status < 300) || status === 304;
    }

    xhrTransport(item: FileItem) {
        const that = this;
        const xhr = new XMLHttpRequest();
        let sendable: any;

        item.reset();
        if (typeof item.file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        sendable = new FormData();
        sendable.append(item.alias, item.file, item.name);

        xhr.upload.onprogress = (event) => {
            const progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            this.onProgressItem(item, progress);
        };

        xhr.onload = () => {
            const headers = this._parseHeaders(xhr.getAllResponseHeaders());
            const response = xhr.response;
            // const method = this.isSuccess(xhr.status) ? 'onSuccessItem' : 'onErrorItem';
            // (this as any)[method](item, response, xhr.status, headers);
            this.onCompleteItem(item, response, xhr.status, headers);
        };

        xhr.onerror = () => {
            const headers = this._parseHeaders(xhr.getAllResponseHeaders());
            const response = xhr.response;
            this.onErrorItem(item, response);
        };

        xhr.onabort = () => {
            const headers = this._parseHeaders(xhr.getAllResponseHeaders());
            const response = xhr.response;
            this.onCancelItem(item);
        };
        xhr.open('POST', this.url, true);
        // xhr.withCredentials = true;
        xhr.setRequestHeader('Authorization', this.authToken);
        xhr.send(sendable);
    }
}
export interface ParsedResponseHeaders { [headerFieldName: string]: string; }
