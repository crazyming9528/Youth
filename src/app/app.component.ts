import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ElementRef} from '@angular/core';
import {PopupComponent} from './share/popup/popup.component';
// import {AlertComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'youth';
  userDropdown = false;
  @ViewChild('alertContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  componentRef: ComponentRef<PopupComponent>;
  constructor(private el: ElementRef, private resolver: ComponentFactoryResolver) {
  }
  ngOnInit() {
    // setTimeout(() => {
    //   this.createComponentFactory('login to admin');
    // }, 5000);
  }

  ngOnDestroy() {
    this.destroyComponent();
  }

  toggleUserDropdown() {
    this.userDropdown = !this.userDropdown;
  }

  changTheme(): void {
    console.log(`切换主题`);
    const body = document.getElementsByTagName('body')[0];
    if (body.getAttribute(`data-theme-style`) === 'aa') {
      body.setAttribute('data-theme-style', 'bb');
    } else {
      body.setAttribute('data-theme-style', 'aa');
    }
  }
  toAdmin(): void {
    window.location.href = 'http://cuit.crazyming.cn/admin/#/login';
  }
  createComponentFactory(type) {
    this.container.clear();
    const factory: ComponentFactory<PopupComponent> = this.resolver.resolveComponentFactory(PopupComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
    console.log('componentRef', this.componentRef);

    this.componentRef.instance.close.subscribe(event => {
      console.log(event);
      this.destroyComponent();
    } );

  }

  destroyComponent() {

    this.componentRef.destroy();
  }
}
