import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInfoViewComponent } from './recipe-info-view.component';

describe('RecipeInfoViewComponent', () => {
  let component: RecipeInfoViewComponent;
  let fixture: ComponentFixture<RecipeInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeInfoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
