// In Angular there is no decorator for service so it's a plain TypeScript class.
export class CoursesService {
    getCourses() {
        return ["course1", "course2", "course3"]
    }
}