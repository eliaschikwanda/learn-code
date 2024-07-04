import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})

// The @Input property is used to mark fields as input properties
export class FavoriteComponent implements OnInit {
  @Input() isFavorite = false;
  
  constructor() {}

  ngOnInit(): void {
  
  }

  onClick () {
    this.isFavorite = !this.isFavorite;
  }
}
