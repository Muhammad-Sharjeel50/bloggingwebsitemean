import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminButtonComponent } from './login-admin-button.component';

describe('LoginAdminButtonComponent', () => {
  let component: LoginAdminButtonComponent;
  let fixture: ComponentFixture<LoginAdminButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAdminButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAdminButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
