import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Person } from './person'
import { Data } from './data'

@Injectable()
export class MockService {

	private url = "https://reqres.in/api/users?page="

	constructor(private http: Http) { }

	getPeople(page: number): Promise<Person[]> {
		return this.http.get(this.url + page.toString())
						.toPromise()
						.then(response => response.json().data)
						.catch(this.handleError)
	}

	getNumberOfPages(): Promise<number> { 
		return this.http.get(this.url+"1")
						.toPromise()
						.then(response => response.json().total_pages)
						.catch(this.handleError)
	}

	handleError(error: any): Promise<any> {
		console.log("Um erro aconteceu " + error)
		return Promise.reject(error.message || error)
	}

}
