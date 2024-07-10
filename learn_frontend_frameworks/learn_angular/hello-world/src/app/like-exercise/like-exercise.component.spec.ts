import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeExerciseComponent } from './like-exercise.component';

describe('LikeExerciseComponent', () => {
  let component: LikeExerciseComponent;
  let fixture: ComponentFixture<LikeExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
