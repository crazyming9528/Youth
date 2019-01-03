import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap';
import { TestComponent } from './test/test.component';
import { UserModule} from './user/user.module';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsModule} from './news/news.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    NewsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
