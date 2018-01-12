import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-progress',
  templateUrl: './video-progress.component.html',
  styleUrls: ['./video-progress.component.css']
})
export class VideoProgressComponent implements OnInit {
  traceleft: number;
  opacity = 0;
  constructor() { }

  ngOnInit() {
  }
  trace(event) {
    this.traceleft = event.offsetX - 25;
  }
  showtime() {
    this.opacity = 1;
  }
  hidetime() {
    this.opacity = 0;
  }
}
