import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  type: any;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  closePopup() {
this.close.emit('close');
  }

}
