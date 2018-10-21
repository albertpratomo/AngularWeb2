import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../task';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { TaskService } from '../task.service';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

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
  departments: Department[];

  ngOnInit() {
    this.selectedTaskId = +this.route.snapshot.paramMap.get('id');
    this.getSelectedTask(this.selectedTaskId);
    this.getDepartmentsFromService();
	}

	constructor(
		private modalService: NgbModal, 
		private projectService: ProjectService,
    private taskService: TaskService,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

	getSelectedTask(id: number){
    this.taskService.getTaskById(id).subscribe(task => this.selectedTask = task);
  }

  getNames(ids: number[]) : string[]{
    return this.employeeService.getEmployeeNames(ids);
  }

  getDepartmentNameById(i:number): string{
    return this.departmentService.getDepartmentNameById(i);
  }

  getDepartmentsFromService(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

  // getSelectedProject(){
  //   this.projectService.getProjectById(this.selectedTask.proid).subscribe(project => this.selectedProject = project);
  // }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.taskService.updateTask(this.selectedTask)
    .subscribe(() => this.goBack());
  }

  deleteTask(): void{
    this.taskService.deleteTask(this.selectedTask.id)
    .subscribe(() => this.goBack());
  }
}