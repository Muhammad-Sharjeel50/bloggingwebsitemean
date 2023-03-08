import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCRUDComponent } from './author-crud.component';

describe('AuthorCRUDComponent', () => {
  let component: AuthorCRUDComponent;
  let fixture: ComponentFixture<AuthorCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
