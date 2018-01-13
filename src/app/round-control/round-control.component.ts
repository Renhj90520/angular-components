import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-round-control',
  templateUrl: './round-control.component.html',
  styleUrls: ['./round-control.component.css']
})
export class RoundControlComponent implements OnInit {
  locations = [
    { 'left': '-52px', 'top': '-52px' },
    { 'left': '2', 'top': '-72px' },
    { 'left': '52px', 'top': '-52px' },
    { 'left': '72px', 'top': '2px' },
    { 'left': '52px', 'top': '52px' },
    { 'left': '2px', 'top': '72px' },
    { 'left': '-52px', 'top': '52px' },
    { 'left': '-72px', 'top': '2px' }
  ];
  positions = [];
  state = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.state = !this.state;

    if (this.state) {
      this.locations.forEach(location => {
        this.positions.push(location);
      });
    } else {
      this.positions = [];
    }
  }
}
