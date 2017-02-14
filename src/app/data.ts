import { Person } from './person';

export class Data {
	page: string;
	per_page: number;
	total: number;
	total_pages: number;
	data: Person[];
}