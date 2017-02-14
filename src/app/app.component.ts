import { Component, OnInit } from '@angular/core';

import { Person } from './person'

import { MockService } from './mock.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	people: Person[];
	pages;
	constructor(private mockService: MockService){ }

	ngOnInit(){
		this.getPeople(1)
		this.getNumberOfPages()
	}

	getNumberOfPages(): void {
		this.mockService.getNumberOfPages().then(data => this.pages = Array(data))
	}

	getPeople(page): void {
		this.mockService.getPeople(page).then(data => this.people = data)
	}

}
