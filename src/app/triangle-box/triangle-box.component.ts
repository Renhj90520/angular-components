import { Component, OnInit } from '@angular/core';
import { swing } from '../animations';

@Component({
  selector: 'app-triangle-box',
  templateUrl: './triangle-box.component.html',
  styleUrls: ['./triangle-box.component.css'],
  animations: [swing]
})
export class TriangleBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
