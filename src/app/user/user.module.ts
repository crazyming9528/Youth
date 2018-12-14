import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginGuideComponent } from './login-guide/login-guide.component';

@NgModule({
  declarations: [LoginGuideComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginGuideComponent
  ]
})
export class UserModule { }
