import { FileUploader } from './file-uploader';

export class FileItem {
    public file: File;
    formData = [];
    isReady = false;
    isUploading = false;
    isUploaded = false;
    isSuccess = false;
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
        this.type = file.type;
        this.alias = 'upload';
    }
    onCancel() {
        this.uploader.cancelItem(this);
        // this.setstatus(false, false, false, false, true, false, 0);
    }
    remove() {
        this.uploader.removeFromQueue(this);
    }

    prepareToUpload() {
        this.isReady = true;
    }

    onError(resp, status, headers) { }
    onComplete(resp, status, headers) { }
    onSuccess(resp, status, headers) { }
    onProgress(prog) {
        this.progress = prog;
    }

    upload() {
        try {
            this.uploader.uploadItem(this);
        } catch (error) {
            this.uploader.onCompleteItem(this, '', 0, {});
            this.uploader.onError(this, '', 0, {});
        }
    }

    reset() {
        this.setstatus(true, true, false, false, false, false, 0);
    }

    setstatus(ready, uploading, uploaded, success, cancel, error, progress) {
        this.isReady = ready;
        this.isUploading = uploading;
        this.isUploaded = uploaded;
        this.isSuccess = success;
        this.isCancel = cancel;
        this.isError = error;
        this.progress = progress;
    }
}
