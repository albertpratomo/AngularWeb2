import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	projects : Project[];
	co : number;

	constructor() { 
		this.projects = [
		{ id: 1, title: 'Web 2 Angular Project', leader: 'Albert', deadline: '30-09-2018', depid: 1 },
		{ id: 2, title: 'Narco', leader: 'Dayana', deadline: '31-09-2018', depid: 1 },
		{ id: 3, title: 'Bombasto', leader: 'Wenjia', deadline: '30-09-2018', depid: 2 },
		{ id: 4, title: 'Celeritas', leader: 'Chao', deadline: '31-09-2018', depid: 3 },
		{ id: 5, title: 'Magneta', leader: 'Wenjia', deadline: '23-09-2018', depid: 2 },
		{ id: 6, title: 'RubberMan', leader: 'Albert', deadline: '30-09-2018', depid: 4 },
		{ id: 7, title: 'Dynama', leader: 'Dayana', deadline: '23-09-2018', depid: 5 },
		{ id: 8, title: 'Dr IQ', leader: 'Wenjia', deadline: '31-09-2018', depid: 2 },
		{ id: 9, title: 'Magma', leader: 'Chao', deadline: '23-09-2018', depid: 3 },
		{ id: 10, title: 'Tornado', leader: 'Dayana', deadline: '31-09-2018', depid: 2 }
		];
		this.co = this.projects.length;
	}

	getProjects(): Observable<Project[]> {
	  return of(this.projects);
	}

	createProject(newTitle:string, newLeader:string, newDeadline:string):void {
		let newId : number; 
		if(this.co <= 0){
			newId = 1;
		}else{
			newId = this.projects[this.co-1].id + 1;
		}

		let p: Project = {
			id: newId,
			title: newTitle,
			leader: newLeader,
			deadline: newDeadline,
			depid: 1
		}
		this.projects.push(p);
		this.co = this.projects.length;
	}

	deleteProject(i: number): void{
		this.projects.splice(i,1);
		this.co = this.projects.length;
	}
}
