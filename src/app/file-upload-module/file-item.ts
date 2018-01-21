import { FileUploader } from './file-uploader';

export class FileItem {
    public file: File;
    formData = [];
    isReady = false;
    isUploading = false;
    isUploaded = false;
    isCancel = false;
    isError = false;
    progress = 0;
    index = void 0;

    name: string;
    size: number;
    type: string;

    alias: string;

    xhr: XMLHttpRequest;
    form: any;
    protected uploader;

    constructor(uploader: FileUploader, file: File) {
        this.uploader = uploader;
        this.file = file;
        this.name = file.name;
        this.size = file.size;
        this.type = file.name.slice(file.name.lastIndexOf('.'));
        console.log(this.type);
        console.log(this.name);
        this.alias = 'upload';
    }
    onCancel() {
        this.uploader.cancelItem(this);
        this.setstatus(false, false, false, true, false, 0);
    }
    remove() {
        this.uploader.removeFromQueue(this);
    }

    prepareToUpload() {
        this.isReady = true;
    }

    onError(resp) {
        console.log(resp);
        console.log(resp);
        this.setstatus(false, false, false, false, true, 0);
    }
    onComplete(resp) {
        console.log('oncomplete');
        console.log(resp);
        this.setstatus(false, false, true, false, false, 100);
    }
    onSuccess(resp) {
        this.setstatus(false, false, true, false, false, 100);
    }
    onProgress(prog) {
        this.progress = prog;
    }

    upload() {
        try {
            this.uploader.uploadItem(this);
        } catch (error) {
            this.uploader.onErrorItem(this, error);
        }
    }

    reset() {
        this.setstatus(true, true, false, false, false, 0);
    }

    setstatus(ready, uploading, uploaded, cancel, error, progress) {
        this.isReady = ready;
        this.isUploading = uploading;
        this.isUploaded = uploaded;
        this.isCancel = cancel;
        this.isError = error;
        this.progress = progress;
    }

    getFaIcon(): string {
        switch (this.type) {
            case '.doc':
            case '.docx':
                return 'fa-file-word-o';
            case '.xlsx':
            case '.xls':
                return 'fa-file-excel-o';
            case '.png':
            case '.jpg':
            case '.gif':
                return 'fa-file-image-o';
            case '.pdf':
                return 'fa-file-pdf-o';
            case '.txt':
                return 'fa-file-text';
            default:
                return 'fa-file-o';
        }
    }
}
