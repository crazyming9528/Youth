import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news-interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input()newsList: News[];
  @Input()type: number;
  @Input()author = true; // 默认显示作者
  @Input()createTime = true;

  // 默认显示发布时间
  constructor(private router: Router) { }

  ngOnInit() {
  }
  jumpLink(nid) {
    this.router.navigate(['article'], {
      queryParams: {
        nid,
        from: 'list'
      }
    });

  }


}
