import { Component, OnInit, Directive, Output } from '@angular/core';
import { FileUploader } from '../file-uploader';
@Component({
  selector: 'app-drag-uploader',
  templateUrl: './drag-uploader.component.html',
  styleUrls: ['./drag-uploader.component.css']
})
export class DragUploaderComponent implements OnInit {
  uploader: FileUploader;
  isFileOver = false;
  @Output() items;
  constructor() { }

  ngOnInit() {
    this.uploader = new FileUploader('http://localhost:3020/api/upload', 'Bear adasdarm56as6d1465asd46sa', true);
  }

  selectChange() {
    console.log('file select change');
  }
  fileOver(event) {
    this.isFileOver = event;
    console.log(event);
  }
}
