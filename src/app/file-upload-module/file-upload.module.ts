import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadDirective } from './file-upload.directive';
import { DragUploaderComponent } from './drag-uploader/drag-uploader.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FileUploadDirective,
    DragUploaderComponent],
  exports: [
    FileUploadDirective,
    DragUploaderComponent
  ],
})
export class FileUploadModule { }
