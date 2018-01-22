import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-corner-sign',
  templateUrl: './corner-sign.component.html',
  styleUrls: ['./corner-sign.component.css']
})
export class CornerSignComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
