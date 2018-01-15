import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.css']
})
export class DropdownInputComponent implements OnInit {
  @Input() items = [];
  @Input() index;
  selected = {};
  state = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.state = !this.state;
  }
  select(index) {
    this.index = index;
    this.selected = this.items[index];
    this.state = false;
  }
}
