import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myParseLastName'})
export class MyParseLastName implements PipeTransform {
	transform(value: string): string {
		return value.charAt(0).toUpperCase() + "."
	}
}
