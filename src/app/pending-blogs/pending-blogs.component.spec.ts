import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBlogsComponent } from './pending-blogs.component';

describe('PendingBlogsComponent', () => {
  let component: PendingBlogsComponent;
  let fixture: ComponentFixture<PendingBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
