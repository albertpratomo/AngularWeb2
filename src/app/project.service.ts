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
		{ id: 1, title: 'Web 2 Angular', leader: 'Albert', deadline: '30-09-2018', depid: 1 },
		{ id: 2, title: 'Android 1', leader: 'Dayana', deadline: '31-09-2018', depid: 1 },
		{ id: 3, title: 'Android 2', leader: 'Wenjia', deadline: '30-09-2018', depid: 2 },
		{ id: 4, title: 'iOS 1', leader: 'Chao', deadline: '31-09-2018', depid: 3 },
		{ id: 5, title: 'iOS 2', leader: 'Wenjia', deadline: '23-09-2018', depid: 2 }
		];
		this.co = this.projects.length;
	}

	getProjects(): Observable<Project[]> {
	  return of(this.projects);
	}

	getProjectById(id:number): Project {
	  return this.projects[id];
	}

	getProjectNameById(id:number): string {
	  return this.projects[id].title;
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
