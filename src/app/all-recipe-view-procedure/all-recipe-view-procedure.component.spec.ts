import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipeViewProcedureComponent } from './all-recipe-view-procedure.component';

describe('AllRecipeViewProcedureComponent', () => {
  let component: AllRecipeViewProcedureComponent;
  let fixture: ComponentFixture<AllRecipeViewProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRecipeViewProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecipeViewProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
