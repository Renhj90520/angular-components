import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
@Component({
  selector: 'app-down-arrow',
  templateUrl: './down-arrow.component.html',
  styleUrls: ['./down-arrow.component.css'],
  animations: [trigger('updown', [
    state('up', style({ top: '20px' })),
    state('down', style({ top: '30px' })),
    transition('up<=>down', animate('600ms ease'))
  ])]
})
export class DownArrowComponent implements OnInit, OnDestroy {
  state = 'up';
  intervalSub;
  constructor() { }

  ngOnInit() {
    this.intervalSub = Observable.interval(600).subscribe(() => {
      this.state = this.state === 'up' ? 'down' : 'up';
    });
  }

  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }
}
