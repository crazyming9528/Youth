import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap';
import { TestComponent } from './test/test.component';
import { UserModule} from './user/user.module';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsModule} from './news/news.module';
import {ShareModule} from './share/share.module';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    FormsModule,
    UserModule,
    HttpClientModule,
    NewsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
