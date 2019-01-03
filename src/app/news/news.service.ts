import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { News } from './news-interface';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }
  getAllNews() {
    return this.http.get(`http://120.78.149.155:8040/news/getAll?pageNum=1&pageSize=10`);
   // return this.http.get<News[]>(`http://120.78.149.155:8040/news/getAll?pageNum=1&pageSize=10`)
  }
  getAnnouncement() {
    return this.http.get(`http://120.78.149.155:8040/news/getAll?pageNum=1&pageSize=5`);
    // return this.http.get<News[]>(`http://120.78.149.155:8040/news/getAll?pageNum=1&pageSize=10`)
  }
  getSlider() {
    return this.http.get(`http://120.78.149.155:8040/NewsTurn/getAll`);
  }
}
