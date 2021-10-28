import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyRecipeComponent } from './edit-my-recipe.component';

describe('EditMyRecipeComponent', () => {
  let component: EditMyRecipeComponent;
  let fixture: ComponentFixture<EditMyRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
