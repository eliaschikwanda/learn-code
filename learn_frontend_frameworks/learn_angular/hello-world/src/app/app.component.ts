import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  post = {
    title: "Title",
    isFavorite: true,
  }

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true,
  }
}
