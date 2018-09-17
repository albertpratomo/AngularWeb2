import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	constructor(private modalService: NgbModal ,  private projectService: ProjectService) { }

	newTitle:string;
	newLeader:string;
	newDeadline:string;
	projects: Project[];
	selectedProject: Project;
	co:number;

	ngOnInit() {
		this.getProjectsFromService();
		this.co = this.projects.length;
		this.selectedProject = this.projects[0];
	}

	open(content:any) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
		}, (reason) => {
		});
	}

	getProjectsFromService(): void {
	  this.projectService.getProjects().subscribe(projects => this.projects = projects);
	}

	onSelect(p: Project): void {
		this.selectedProject = p;
	}

	createProject():void {
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
