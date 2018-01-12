import { Component, OnInit, ElementRef, ViewChild, Input, ViewRef } from '@angular/core';
@Component({
  selector: 'app-scroll-navbar',
  templateUrl: './scroll-navbar.component.html',
  styleUrls: ['./scroll-navbar.component.css']
})
export class ScrollNavbarComponent implements OnInit {
  defaultOffset: number;
  @ViewChild('logo') logo;
  @ViewChild('items') itemswraper;

  @Input() sectionsTop = [];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const items = this.itemswraper.nativeElement.children;
    this.defaultOffset = this.el.nativeElement.offsetTop;
    window.onscroll = (event) => {
      if (window.scrollY > this.defaultOffset) {
        this.el.nativeElement.className = 'sticky';
        this.logo.nativeElement.className = 'logo sticky';
        this.itemswraper.nativeElement.className = 'shrink';
      } else {
        this.el.nativeElement.className = '';
        this.logo.nativeElement.className = 'logo';
        this.itemswraper.nativeElement.className = '';
      }
      let largest = 0;
      for (let i = 0; i < items.length; i++) {
        if (window.scrollY >= this.sectionsTop[i]) {
          largest = i;
        }
        items[i].className = '';
      }
      items[largest].className = 'current';
    };
  }
}
