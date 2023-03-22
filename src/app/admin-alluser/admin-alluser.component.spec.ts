import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlluserComponent } from './admin-alluser.component';

describe('AdminAlluserComponent', () => {
  let component: AdminAlluserComponent;
  let fixture: ComponentFixture<AdminAlluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAlluserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAlluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
