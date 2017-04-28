import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'maxlength',
})
export class MaxLengthPipe implements PipeTransform {
    transform(value: string, maxLength: number): string {
        if (!maxLength || !value || value.length <= maxLength)
            return value

        let transformedValue = value.slice(0,maxLength) +'...';

        return transformedValue;
    }
}