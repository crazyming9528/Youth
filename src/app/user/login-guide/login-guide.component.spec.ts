import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGuideComponent } from './login-guide.component';

describe('LoginGuideComponent', () => {
  let component: LoginGuideComponent;
  let fixture: ComponentFixture<LoginGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
