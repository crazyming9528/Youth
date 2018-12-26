import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youth';
  userDropdown = false;
  toggleUserDropdown() {
    this.userDropdown = !this.userDropdown;
  }
}
