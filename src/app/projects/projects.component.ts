import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../project';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	constructor(private modalService: NgbModal) { }

	newTitle:string;
	newLeader:string;
	newDeadline:string;

	ngOnInit() {
	}

	open(content:any) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
		}, (reason) => {
		});
	}

	projects: Project[] = [
	{ id: 1, title: 'Mr. Nice', leader: 'Albert', deadline: '30-09-2018' },
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

	co:number = this.projects.length;

	selectedProject: Project = this.projects[0];

	onSelect(p: Project): void {
		this.selectedProject = p;
	}

	createProject():void {
		let co = this.projects
		let p: Project = {
			id: this.co+1,
			title: this.newTitle,
			leader: this.newLeader,
			deadline: this.newDeadline
		}
		this.projects.push(p);
	}

	deleteProject(i: number): void{
		this.projects.splice(i,1);
		this.co--;
	}
}
