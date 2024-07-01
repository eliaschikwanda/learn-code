import { Pipe, PipeTransform } from "@angular/core";

// Implementing a custom pipe to summarise text

@Pipe({
    name: 'summary',
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if (!value) {
            return null
        }
        return value.substring(0, 50) + "...";
    }
}