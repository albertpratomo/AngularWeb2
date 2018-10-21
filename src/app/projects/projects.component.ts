import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { FilterPipe} from '../filter.pipe';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	constructor(private modalService: NgbModal,
		private projectService: ProjectService,
		private departmentService: DepartmentService)
	{ 
		this.getProjectsFromService();
		this.getDepartmentsFromService();
	}

	newTitle:string;
	newPDepId:number;
	newDeadline:string;
	projects: Project[];
	departments: Department[];


	ngOnInit() {
		this.newPDepId = 3048;
	}

	open(content:any) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
		}, (reason) => {
		});
	}

	getProjectsFromService(): void {
		this.projectService.getProjects().subscribe(projects => this.projects = projects);
	}

	createProject():void {
		this.projectService.createProject(this.newTitle,this.newPDepId,this.newDeadline);
	}

	deleteProject(i: number): void{
		this.projectService.deleteProject(i);
	}

	getDepartmentNameById(id:number): string{
		// return this.depar.getDepartmentNameById(i);	   
	  	return this.departments.find(d => d.id === id).name;
	}

	getDepartmentsFromService(): void {
		this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
	}
}
