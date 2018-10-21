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

		// The data is hardcoded in this service because there is no API to populate the Projects data
		this.projects = [
		{ id: 1, title: 'Web 2 Angular', deadline: '24-10-2018', depid: 3048 },
		{ id: 2, title: 'Android 1', deadline: '27-10-2018', depid: 3049 },
		{ id: 3, title: 'Android 2', deadline: '28-10-2018', depid: 3048 },
		{ id: 4, title: 'iOS 1', deadline: '30-10-2018', depid: 3049 },
		{ id: 5, title: 'iOS 2', deadline: '31-10-2018', depid: 3051 }
		];
		this.co = this.projects.length;
	}

	getProjects(): Observable<Project[]> {
	  return of(this.projects);
	}

	getProjectById(id: number): Observable<Project> {
	  return of(this.projects.find(project => project.id === id));
	}

	getProjectNameById(id:number): string {
	  return this.projects[id].title;
	}

	createProject(newTitle:string, newDeadline:string):void {
		let newId : number; 
		if(this.co <= 0){
			newId = 1;
		}else{
			newId = this.projects[this.co-1].id + 1;
		}

		let p: Project = {
			id: newId,
			title: newTitle,
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
