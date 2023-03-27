import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { generateRandomString } from "../utils";

@Component({
  selector: "app-segmented-progress-bar",
  templateUrl: "./segmented-progress-bar.component.html",
  styleUrls: ["./segmented-progress-bar.component.css"],
})
export class SegmentedProgressBarComponent implements OnInit, OnChanges {
  @ViewChild("svg") svg;
  @Input() min = 0;
  @Input() max = 100;
  @Input() val = 0;
  @Input() bar_count = 50;
  @Input() bar_gap = 2;
  @Input() gradients = ["#00395a", "#00baff"];

  id;
  segments = [];
  extras = [];
  gradientPercent = "0%";
  constructor() {
    this.id = generateRandomString(8);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.min || changes.max || changes.val) && this.svg) {
      this.resize();
    }
  }

  ngOnInit() {
    this.resize();
  }

  @HostListener("window:resize")
  resize() {
    const svg = this.svg.nativeElement;
    const width = svg.clientWidth;
    const height = svg.clientHeight;
    const perBarWidth =
      (width - this.bar_gap * (this.bar_count - 1)) / this.bar_count;

    const percentage = (this.val - this.min) / (this.max - this.min);
    const percentWidth = percentage * width;
    const segments = [];
    let extraIdx = 0;
    if (percentWidth > 0) {
      for (let i = 0; i < this.bar_count; i++) {
        if (i + 1 < this.bar_count) {
          const currWidth = (i + 1) * perBarWidth + i * this.bar_gap;
          let left = i * perBarWidth + i * this.bar_gap;
          segments.push({
            x: left,
            y: 0,
            width: perBarWidth,
            height: height,
          });
          if (currWidth >= percentWidth) {
            this.gradientPercent = (currWidth / width) * 100 + "%";
            this.segments = segments;
            extraIdx = i;
            break;
          }
        }
      }
    }
    let extras = [];
    for (let i = extraIdx; i < this.bar_count; i++) {
      let left = (i + 1) * perBarWidth + i * this.bar_gap;
      if (i > 0 && percentWidth > 0) {
        left += this.bar_gap;
      }
      extras.push({
        x: left,
        y: 0,
        width: perBarWidth,
        height,
      });
    }
    this.extras = extras;
  }
}
