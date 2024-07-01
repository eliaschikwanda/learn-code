import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

// When naming the class use Pascals convention.
// and the put the word componet at the end of the naming class
// also when naming the file use filename.component.ts. If the filename has
// two words use a `-` to separate the words.
// Inorder to convert a class into a component so that TypeScript understands it we need
// to use a decorator called component we can attache to a class to make that class componet.
// The decorator Component takes an argument with the list of properties of the selector.


@Component({
    selector: "courses",
    // template: "<h2>{{ \"List: \" + getTitle() }}</h2>" // String Interpolation.
    // Another way of writing the template field is below showing derivaties which
    // are used to manipulate the dorm. `` are use to have multiple lines and it's a cleaner
    // way of writing code.
    template: `
        <h2> {{ getTitle() }} </h2>
        <ul>
            <li *ngFor="let course of courses"> 
                {{course}}
            </li>
            <br>
            <button class = "btn btn-primary">Save</button>
        </ul>
    
    `
})
export class CourseComponet {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) { // This adding it as a dependency and Angular will create an instance of the class CoursesService and pass that in
                                            // in the case there are 2 or more instance needed Angular will pass on that one istance and this process is called
                                            // Singleton.
        this.courses = service.getCourses();

    }


    
    // Or you can define a function that you can call
    // inside the template with data binding
    getTitle() {
        return this.title;
    }

    
    // Most of the time we get the course data from a server
    // And we write the logic insided for calling an HTTP server in this class
    // But there is an issue when we want to write unit test so it is not a best practise to tie 
    // an HTTP response to a component.

}