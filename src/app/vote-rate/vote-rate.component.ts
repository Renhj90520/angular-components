import { Component, OnInit, Output, Input, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vote-rate',
  templateUrl: './vote-rate.component.html',
  styleUrls: ['./vote-rate.component.css']
})
export class VoteRateComponent implements OnInit {
  @Input() currentValue;
  @Output() vote = new EventEmitter();

  states = [false, false, false, false, false];
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.setActive(this.currentValue);
    this.el.nativeElement.onmouseleave = () => { this.reset(); };
  }
  dovote(index) {
    this.currentValue = index;
    this.setActive(this.currentValue);
    this.vote.emit(this.currentValue);
  }
  dohover(index) {
    this.setActive(index);
  }
  setActive(index: number) {
    for (let i = 0; i <= index; i++) {
      this.states[i] = true;
    }
    const left = Math.abs(index) + 1;
    for (let j: number = left; j < this.states.length; j++) {
      this.states[j] = false;
    }
  }
  reset() {
    this.setActive(this.currentValue);
  }
}
