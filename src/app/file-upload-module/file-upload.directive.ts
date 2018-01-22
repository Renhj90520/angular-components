import { Directive, Input, Output, ElementRef, EventEmitter, HostListener } from '@angular/core';
import { FileUploader } from './file-uploader';
@Directive({
  selector: '[appFileUpload]'
})
export class FileUploadDirective {
  @Input() uploader: FileUploader;
  @Output() fileSelected: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Output() fileOver: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef) { }

  @HostListener('change')
  onChange() {
    const inputEl = this.el.nativeElement.children[1];
    this.uploader.addToQueue(inputEl.files);
    this.fileSelected.emit(inputEl.files);
    inputEl.value = '';
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    console.log('ondrop');
    const transfer = event.dataTransfer;
    if (!transfer) {
      return;
    }

    this.preventAndStop(event);
    this.uploader.addToQueue(transfer.files);
    this.fileOver.emit(false);
    this.fileSelected.emit(transfer.files);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    const transfer = event.dataTransfer;
    if (this.hasFiles(transfer.types)) {
      transfer.dropEffect = 'copy';
      this.preventAndStop(event);
      this.fileOver.emit(true);
    }
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {
    if ((this as any).element) {
      if (event.currentTarget === (this as any).element[0]) {
        return;
      }
    }

    this.preventAndStop(event);
    this.fileOver.emit(false);
  }
  protected preventAndStop(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  protected hasFiles(types) {
    if (types) {
      if (types.indexOf) {
        return types.indexOf('Files') !== -1;
      } else if (types.contains) {
        return types.contains('Files');
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
