import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
import { title } from "process";

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
            <li *ngFor="let course of courses"> 
                {{course}}
            </li>
            <hr>
            <button class = "btn btn-primary" [class.active] = "isActive">Bootstrap class and Class Binding</button>
            <hr>
            <button [style.backgroundColor] = "isActive ? 'blue' : 'red'" > Conditional Style Binding</button>
            <hr>
            <div (click) = "onClickDiv()">
                <button (click) = "onClick($event)">Event Binding (Event Bubbling)</button>
            </div>
            <hr>
            <input (keyup.enter) = "onKeyUp($event)">
            <hr>
            <input #name (keyup.enter) = "onKeyUpTemplateVariable(name.value)">
            <hr> 
            <input [value] = "email" (keyup.enter) = "onKeyUpTwoWayBinding($event)"/>
            <hr>
            <p>Better way for two way binding below than the above one.</p>
            <input [(ngModel)]="emailD" (keyup.enter)="onKeyUpTwoWayBindingB()"/>
        <h3>Angular Pipes</h3>
        {{course.title | uppercase}} <br>
        {{course.rating | number: '1.2-2'}} <br>
        {{course.students | number}} <br>
        {{course.price | currency: 'USD'}} <br>
        {{course.releaseDate | date: 'shortDate'}} <br>
        {{course.title | summary}} <br> 
        `
})
export class CourseComponet {
    isActive = false;
    title = "List of courses";
    courses;
    email: string; // A varibale can be used with two way binding to update it from the template.
    emailD: string;

    // Pipes
    course = {
        title: "The Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1),
        longCustomPipeTry: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
    }

    constructor(service: CoursesService) { // This adding it as a dependency and Angular will create an instance of the class CoursesService and pass that in
                                            // in the case there are 2 or more instance needed Angular will pass on that one istance and this process is called
                                            // Singleton.
        this.courses = service.getCourses();
        this.email = "me@example.com";
        this.emailD = "me@hello.com";

    }
    // Or you can define a function that you can call
    // inside the template with data binding
    getTitle() {
        return this.title;
    }

    onKeyUpTwoWayBindingB() {
        console.log("Efficient two way binding --> " + this.email);
    }

    onKeyUpTwoWayBinding($event: any) {
        // For two way binding you don't need to pass in the the template variable or the $event handler
        // But rather use property binding to bind the email varible in the clas to be updated when changes
        // occur in the DOM. The value property binding is from the Component to the View, not the other way round.
        this.email = $event.target.value;
        console.log("You have entered " + this.email);
    }

    onKeyUp($event : any) {
        // Traditional method of filtering an event
        console.log("keyUp was pressed");
        console.log("To get the value typed in the input form --> " + $event.target.value);
        // Or you can use the template variable instead of passing the whole event
    }

    onKeyUpTemplateVariable(formData: string) {
        console.log(formData);
    }

    onClick($event: any) {
        $event.stopPropagation();
        // To prevent even bubbling use the line above.
        console.log("We have clicked a message.", $event)
    }

    onClickDiv() {
        console.log("Div was clicked.")
    }
    
    // Most of the time we get the course data from a server
    // And we write the logic insided for calling an HTTP server in this class
    // But there is an issue when we want to write unit test so it is not a best practise to tie 
    // an HTTP response to a component.

}