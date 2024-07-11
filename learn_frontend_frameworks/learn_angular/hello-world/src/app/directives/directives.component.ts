import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  courses = [
    {id: 1, name : 'course_1'},
    {id: 2, name : 'course_2'},
    {id: 3, name : 'course_3'},
  ];
  viewMode = "mapp"; 
}
