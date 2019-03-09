import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news/news.service';
import {Res} from '../news/news-interface';
import {News} from '../news/news-interface';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ trigger('signal', [
    state('go', style({ 'background-color': 'green'})),
    state('stop', style({ 'background-color': 'red'})),
    transition('* => *', animate('.5s 1s cubic-bezier(0.2, 0.8, 0.3, 1.8)'))
  ])]
})
export class HomeComponent implements OnInit {
  signal: string;
  data: any;
  hello: string;
  newsList: News[];
  announcementList: News[];
  sliderList: any[];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
    this.getAnnouncement();
    this.getSlider();
    this.sayHello();

  }
  sayHello(): void {
    const now = new Date(), hour = now.getHours();
    if (hour < 6) {this.hello = `凌晨好,保持充足的睡眠才能更有活力！`; }
    else if (hour < 10) {this.hello = `早上好，愿你今天有个好心情！`; }
    else if (hour < 12) {this.hello = `上午好，想好今天吃什么了吗？`; }
    else if (hour < 14) {this.hello = `中午好，睡个午觉休息下吧！`; }
    else if (hour < 19) {this.hello = `下午好呀，每天都要保持活力哦！`;}
    else if (hour < 22) {this.hello = `晚上好，累了一天早点休息哦！`; }
    else if (hour < 24) {this.hello = `已经很晚了，记得早点休息哦！`; }
  }

getNews() {
   const  ob = this.newsService.getAllNews(1, 15);
   ob.subscribe((res: Res) => {
     if (res) {
       const {code, map: {pageInfo: { list}} } = res;
       this.newsList = list;
       console.log(list);
     }

   });
}

getAnnouncement() {
  const  ob = this.newsService.getAnnouncement();
  ob.subscribe((res: Res) => {
    if (res) {
      const {code, map: {pageInfo: { list}} } = res;
      this.announcementList = list;
    }
  });
}

getSlider() {
    const  ob = this.newsService.getSlider();
    ob.subscribe((res: Res) => {
      console.log(res);
      if (res) {
        const {code, map: { turn }} = res;
        this.sliderList = turn;
      }
    });
}

toGreen() {
    this.signal = 'go';
}

toRed() {
  this.signal = 'stop';
  }

}
