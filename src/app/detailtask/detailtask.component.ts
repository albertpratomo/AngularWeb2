import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../task';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-detailtask',
	templateUrl: './detailtask.component.html',
	styleUrls: ['./detailtask.component.css']
})
export class DetailtaskComponent implements OnInit {

	@Input() selectedTask: Task;
	selectedProject: Project;

	ngOnInit() {
		this.getSelectedProject();
	}

	constructor(private modalService: NgbModal, private projectService: ProjectService) {}

	open(content:any) {
		
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
		}, (reason) => {
		});
	}

	getSelectedProject(): void{
    this.selectedProject = this.projectService.getProjectById(this.selectedTask.proid-1);
  }

}