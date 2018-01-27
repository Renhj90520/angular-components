import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FileUploadModule } from './file-upload-module/file-upload.module';
import { AppComponent } from './app.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { DownArrowComponent } from './down-arrow/down-arrow.component';
import { ScrollNavbarComponent } from './scroll-navbar/scroll-navbar.component';
import { PrograssBarComponent } from './prograss-bar/prograss-bar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { HiIconComponent } from './hi-icon/hi-icon.component';
import { TriangleBoxComponent } from './triangle-box/triangle-box.component';
import { SlideMenuFullComponent } from './slide-menu-full/slide-menu-full.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SpinComponent } from './spin/spin.component';
import { VideoProgressComponent } from './video-progress/video-progress.component';
import { ScrollPanelComponent } from './scroll-panel/scroll-panel.component';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';
import { InputComponent } from './input/input.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { RoundControlComponent } from './round-control/round-control.component';
import { VoteRateComponent } from './vote-rate/vote-rate.component';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryItemAnimateComponent } from './gallery-item-animate/gallery-item-animate.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CollapsePanelComponent } from './collapse-panel/collapse-panel.component';
import { CollapsePanelOtherComponent } from './collapse-panel-other/collapse-panel-other.component';
import { SlideCarouselComponent } from './slide-carousel/slide-carousel.component';
import { RollCarouselComponent } from './roll-carousel/roll-carousel.component';
import { MaskPopupComponent } from './mask-popup/mask-popup.component';
import { CornerSignComponent } from './corner-sign/corner-sign.component';
import { TabPanelBlueComponent } from './tab-panel-blue/tab-panel-blue.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideMenuComponent,
    DownArrowComponent,
    ScrollNavbarComponent,
    PrograssBarComponent,
    TimelineComponent,
    TimelineItemComponent,
    TooltipComponent,
    HiIconComponent,
    TriangleBoxComponent,
    SlideMenuFullComponent,
    VideoPlayerComponent,
    SpinComponent,
    VideoProgressComponent,
    ScrollPanelComponent,
    ScrollBarComponent,
    InputComponent,
    TabPanelComponent,
    RoundControlComponent,
    VoteRateComponent,
    DropdownInputComponent,
    GalleryItemComponent,
    GalleryItemAnimateComponent,
    GalleryComponent,
    CollapsePanelComponent,
    CollapsePanelOtherComponent,
    SlideCarouselComponent,
    RollCarouselComponent,
    MaskPopupComponent,
    CornerSignComponent,
    TabPanelBlueComponent,
    AccordionPanelComponent,
    AccordionItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
