import {Component, Input, OnInit} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-carousel-config',
  templateUrl: './test.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4000, noPause: true, showIndicators: true } }
  ]
})
export class TestComponent implements OnInit {
  myInterval = 5000;
  @Input()sliderList: any;
  constructor() { }

  ngOnInit() {
    console.log(this.sliderList);
  }

}
