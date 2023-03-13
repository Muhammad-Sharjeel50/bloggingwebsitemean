import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllblogComponent } from './admin-allblog.component';

describe('AdminAllblogComponent', () => {
  let component: AdminAllblogComponent;
  let fixture: ComponentFixture<AdminAllblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
