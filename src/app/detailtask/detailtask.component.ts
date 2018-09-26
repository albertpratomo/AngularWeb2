import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../task';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { TaskService } from '../task.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-detailtask',
	templateUrl: './detailtask.component.html',
	styleUrls: ['./detailtask.component.css']
})
export class DetailtaskComponent implements OnInit {

    selectedTaskId: number;
    selectedTask: Task;
	selectedProject: Project;

	ngOnInit() {
	 this.selectedTaskId = +this.route.snapshot.paramMap.get('id');
	 this.getSelectedTask(this.selectedTaskId);
	 this.getSelectedProject();
	}

	constructor(
		private modalService: NgbModal, 
		private projectService: ProjectService,
	    private taskService: TaskService,
		private route: ActivatedRoute,
        private location: Location
        ) {}

	getSelectedTask(id: number){
    this.taskService.getTaskById(id).subscribe(task => this.selectedTask = task);
  }


  getSelectedProject(){
    this.projectService.getProjectById(this.selectedTask.proid-1).subscribe(project => this.selectedProject = project);
  }
  goBack(): void {
    this.location.back();
  }

  deleteTask(): void{
    this.taskService.deleteTask(this.selectedTaskId-1);
    this.goBack();
  }
}