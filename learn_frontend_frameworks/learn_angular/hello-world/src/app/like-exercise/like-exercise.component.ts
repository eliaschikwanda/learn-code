import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like-exercise',
  templateUrl: './like-exercise.component.html',
  styleUrl: './like-exercise.component.css'
})
export class LikeExerciseComponent {
  @Input('likesCount') likesCount: number; // In brackets that's aliasing.
  @Input('isActive') isActive: boolean;

  constructor() {
    this.isActive = false
    this.likesCount = 0
  }

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
