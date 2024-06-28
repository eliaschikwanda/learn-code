import { Component } from "@angular/core";

// When naming the class use Pascals convention.
// and the put the word componet at the end of the naming class
// also when naming the file use filename.component.ts. If the filename has
// two words use a `-` to separate the words.
// Inorder to convert a class into a component so that TypeScript understands it we need
// to use a decorator called component we can attache to a class to make that class componet.
// The decorator Component takes an argument with the list of properties of the selector.

@Component({
    selector: "courses",
    template: "<h2>Courses</h2>"
})
export class CourseComponet {

}