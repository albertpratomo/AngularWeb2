import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { DepartmentService } from '../department.service';
import { FilterPipe} from '../filter.pipe';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	constructor(private modalService: NgbModal ,  private projectService: ProjectService, private departmentService: DepartmentService) { }

	newTitle:string;
	newLeader:string;
	newDeadline:string;
	projects: Project[];
	selectedProject: Project;

	ngOnInit() {
		this.getProjectsFromService();
		this.selectedProject = this.projects[0];
	}

	open(content:any) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
		}, (reason) => {
		});
	}

	onSelect(p: Project): void {
		this.selectedProject = p;
	}

	getProjectsFromService(): void {
	  this.projectService.getProjects().subscribe(projects => this.projects = projects);
	}

	createProject():void {
		this.projectService.createProject(this.newTitle,this.newLeader,this.newDeadline);
	}

	deleteProject(i: number): void{
		this.projectService.deleteProject(i);
	}

	// getDepartmentNameById(i:number): string{
	//     return this.departmentService.getDepartmentNameById(i-1);
	//   }
}
