import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news-interface';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input()newsList: News[];
  @Input()type: number;
  @Input()author = true; // 默认显示作者
  @Input()createTime = true; // 默认显示发布时间
  constructor() { }

  ngOnInit() {
  }


}
