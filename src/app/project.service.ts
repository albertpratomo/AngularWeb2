import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	constructor() { }

	getProjects(): Observable<Project[]> {
	  let projects: Project[] = [
		{ id: 1, title: 'Web 2 Angular Project', leader: 'Albert', deadline: '30-09-2018' },
		{ id: 2, title: 'Narco', leader: 'Dayana', deadline: '31-09-2018' },
		{ id: 3, title: 'Bombasto', leader: 'Wenjia', deadline: '30-09-2018' },
		{ id: 4, title: 'Celeritas', leader: 'Chao', deadline: '31-09-2018' },
		{ id: 5, title: 'Magneta', leader: 'Wenjia', deadline: '23-09-2018' },
		{ id: 6, title: 'RubberMan', leader: 'Albert', deadline: '30-09-2018' },
		{ id: 7, title: 'Dynama', leader: 'Dayana', deadline: '23-09-2018' },
		{ id: 8, title: 'Dr IQ', leader: 'Wenjia', deadline: '31-09-2018' },
		{ id: 9, title: 'Magma', leader: 'Chao', deadline: '23-09-2018' },
		{ id: 10, title: 'Tornado', leader: 'Dayana', deadline: '31-09-2018' }
		];

	  return of(projects);
	}
}
