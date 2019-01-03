import { Component } from '@angular/core';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youth';
  userDropdown = false;

  constructor(private el: ElementRef) {
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
}
