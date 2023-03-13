import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidenavbarComponent } from './admin-sidenavbar.component';

describe('AdminSidenavbarComponent', () => {
  let component: AdminSidenavbarComponent;
  let fixture: ComponentFixture<AdminSidenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSidenavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
