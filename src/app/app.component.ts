import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ids = [
    'home', 'about', 'services', 'portfolio', 'news', 'scrollpanel'
  ];
  keyvalues = [
    { key: 0, value: 'home' },
    { key: 1, value: 'about' },
    { key: 2, value: 'services' },
    { key: 3, value: 'portfolio' },
    { key: 4, value: 'news' },
    { key: 5, value: 'scrollpanel' }
  ];
  sections: number[];
  photos = [];
  files = [];
  @ViewChild('home') home;
  @ViewChild('about') about;
  @ViewChild('services') services;
  @ViewChild('portfolio') portfolio;
  @ViewChild('news') news;
  @ViewChild('scrollpanel') scrollpanel;
  @ViewChild('gallery') gallery;
  @ViewChild('popup') popup;
  carouselItems = [
    { src: 'assets/images/banner-width1.png' },
    { src: 'assets/images/banner-width2.png' },
    { src: 'assets/images/banner-width3.png' },
    { src: 'assets/images/banner-width4.png' },
    { src: 'assets/images/banner-width5.png' },
    { src: 'assets/images/banner-width1.png' },
  ];

  tabitems = [{
    title: 'Panel One',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velitesse cillum dolore eu fugiat nulla pariatur.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.`
  }, {
    title: 'Panel Two',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua 1.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velitesse cillum dolore eu fugiat nulla pariatur.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.`
  }, {
    title: 'Panel Three',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua 2.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velitesse cillum dolore eu fugiat nulla pariatur.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.`
  }
  ];
  ngOnInit() {
    this.sections = [];
    this.sections.push(this.home.nativeElement.offsetTop);
    this.sections.push(this.about.nativeElement.offsetTop);
    this.sections.push(this.services.nativeElement.offsetTop);
    this.sections.push(this.portfolio.nativeElement.offsetTop);
    this.sections.push(this.news.nativeElement.offsetTop);
    this.sections.push(this.scrollpanel.nativeElement.offsetTop);

    Observable.interval(2000).take(5).forEach(() => {
      this.photos.push({ src: 'assets/images/example_4.jpg', title: 'LOREM IPSUM DOLOR', description: 'Some description' });
      this.photos.push({ src: 'assets/images/example_4.jpg', title: 'LOREM IPSUM DOLOR', description: 'Some description' });
      this.photos.push({ src: 'assets/images/example_4.jpg', title: 'LOREM IPSUM DOLOR', description: 'Some description' });
      this.gallery.onItemNumChange();
    });

  }
  dovote(event) {
    console.log(event);
  }
  open() {
    this.popup.open();
  }
}
