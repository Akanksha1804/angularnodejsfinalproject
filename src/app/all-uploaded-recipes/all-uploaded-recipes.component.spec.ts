import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUploadedRecipesComponent } from './all-uploaded-recipes.component';

describe('AllUploadedRecipesComponent', () => {
  let component: AllUploadedRecipesComponent;
  let fixture: ComponentFixture<AllUploadedRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUploadedRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUploadedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
