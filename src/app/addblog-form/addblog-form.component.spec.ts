import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblogFormComponent } from './addblog-form.component';

describe('AddblogFormComponent', () => {
  let component: AddblogFormComponent;
  let fixture: ComponentFixture<AddblogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddblogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddblogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
