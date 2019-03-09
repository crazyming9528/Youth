import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { News } from './news-interface';
import { Base64 } from 'js-base64';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = `http://120.78.149.155:8040`;

  httpOptions = {};

  constructor(private http: HttpClient) {
   this.httpOptions = { headers: new HttpHeaders({ 'Authorization': Base64.decode(localStorage.getItem('login'))})};
  }
  getAllNews(currentPage, pageSize) {
    return this.http.get(this.baseUrl + `/news/getAll?pageNum=${currentPage}&pageSize=${pageSize}`);
   // return this.http.get<News[]>(`http://120.78.149.155:8040/news/getAll?pageNum=1&pageSize=10`)
  }
  getAnnouncement() {
    return this.http.get(this.baseUrl + `/news/getAll?pageNum=1&pageSize=5`);
    // return this.http.get<News[]>(`http://120.78.149.155:8040/news/getAll?pageNum=1&pageSize=10`)
  }
  getSlider() {
    return this.http.get(this.baseUrl + `/newsTurn/getAll`);
  }
  getNewsType() {
    return this.http.get(this.baseUrl + `/newsType/getAll?pageNum=1&pageSize=100`);
  }
  getNewsByType(id) {
    return this.http.get(this.baseUrl + `/news/getNewsByQuery?type=${id}&pageNum=1&pageSize=10`);
  }
  getNewsContent(id) {

    return this.http.get(this.baseUrl + `/news/getNewsById?newsId=${id}`);
  }
  addView(newsId) {
    return this.http.post(this.baseUrl + `/news/addNewsVisitor`, {
      newsId
    }, this.httpOptions);
  }
  addComment(newsId, commentTo, toComment, content) {
    return this.http.post(this.baseUrl + `/newsDiscuss/add`, {
      newsId,
      commentTo,
      toComment,
      content
    });

  }
  getComment(newsId) {
    return this.http.get(this.baseUrl + `/newsDiscuss/getNewsDiscussByNewsId?newsId=${newsId}`);
  }
}
