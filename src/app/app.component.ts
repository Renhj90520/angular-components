import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ids = [
    'home', 'about', 'services', 'portfolio', 'news', 'scrollpanel'
  ];
  sections: number[];
  @ViewChild('home') home;
  @ViewChild('about') about;
  @ViewChild('services') services;
  @ViewChild('portfolio') portfolio;
  @ViewChild('news') news;
  @ViewChild('scrollpanel') scrollpanel;

  ngOnInit() {
    this.sections = [];
    this.sections.push(this.home.nativeElement.offsetTop);
    this.sections.push(this.about.nativeElement.offsetTop);
    this.sections.push(this.services.nativeElement.offsetTop);
    this.sections.push(this.portfolio.nativeElement.offsetTop);
    this.sections.push(this.news.nativeElement.offsetTop);
    this.sections.push(this.scrollpanel.nativeElement.offsetTop);
  }
}
