import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserApprovalComponent } from './admin-user-approval.component';

describe('AdminUserApprovalComponent', () => {
  let component: AdminUserApprovalComponent;
  let fixture: ComponentFixture<AdminUserApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
