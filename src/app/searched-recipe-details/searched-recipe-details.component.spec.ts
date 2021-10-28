import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedRecipeDetailsComponent } from './searched-recipe-details.component';

describe('SearchedRecipeDetailsComponent', () => {
  let component: SearchedRecipeDetailsComponent;
  let fixture: ComponentFixture<SearchedRecipeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedRecipeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedRecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
