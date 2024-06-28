import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  //templateUrl: './authors.component.html',
  //styleUrl: './authors.component.css'
  template: `<ul>
    <li *ngFor = "let author of authors">
        {{author}}
    </li>
</ul>`
})
export class AuthorsComponent {
  authors = ["elias1", "elias2"];

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}
