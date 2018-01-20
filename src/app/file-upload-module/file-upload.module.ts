import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadDirective } from './file-upload.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileUploadDirective],
  exports: [FileUploadDirective]
})
export class FileUploadModule { }
