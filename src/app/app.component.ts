import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import { ElementRef} from '@angular/core';
import {PopupComponent} from './share/popup/popup.component';
// import {AlertComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'youth';
  userDropdown = false;
  @ViewChild('alertContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  componentRef: ComponentRef<PopupComponent>;
  constructor(private el: ElementRef, private resolver: ComponentFactoryResolver) {
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
