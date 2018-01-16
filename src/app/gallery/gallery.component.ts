import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() photos = [];
  @Input() title: string;
  @ViewChild('content') content;
  itemWidth = 320;
  contentPadding = 60;
  constructor() { }

  ngOnInit() {
    window.onresize = () => {
      this.range();
    };
  }

  onItemNumChange() {
    this.range();
  }
  range() {
    const contentActualWidth = this.content.el.nativeElement.clientWidth - this.contentPadding;
    const itemNumInRow = Math.floor(contentActualWidth / (this.itemWidth + 40));
    const items = this.content.content.nativeElement.children;

    if (itemNumInRow > 0) {
      const rowNum = Math.min(this.photos.length, itemNumInRow);
      const itemTotalWidth = this.itemWidth * rowNum;
      const marginTotal = contentActualWidth - itemTotalWidth;
      const margin = Math.floor(marginTotal / rowNum / 2);
      setTimeout(() => {
        for (let i = 0; i < items.length; i++) {
          items[i].style.cssText = `margin-left:${margin}px;margin-right:${margin}px`;
        }
      }, 100);
      this.content.onContentChange();
    }
  }
}
