import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { EmpprjService } from '../empprj.service';
import { EmployeeService } from '../employee.service';
import { TaskService } from '../task.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailproject',
  templateUrl: './detailproject.component.html',
  styleUrls: ['./detailproject.component.css']
})
export class DetailprojectComponent implements OnInit {

  selectedProjectId: number;
  selectedProject: Project;
  departments: Department[];

  ngOnInit() {
    this.selectedProjectId = +this.route.snapshot.paramMap.get('id');
    this.getSelectedProject(this.selectedProjectId);
    this.getDepartmentsFromService();
  }

  constructor(
    private modalService: NgbModal, 
    private departmentService: DepartmentService, 
    private empprjService: EmpprjService, 
    private employeeService: EmployeeService, 
    private projectService: ProjectService, 
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  getSelectedProject(id: number){
    this.projectService.getProjectById(id).subscribe(project => this.selectedProject = project);
  }

  getDepartmentsFromService(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

  getDepartmentNameById(i:number): string{
    return this.departmentService.getDepartmentNameById(i);
  }

  // The 2 functions below are used for the old ERD (before API)
  // getEmpnamesByProid(): void{
  //   let id = this.selectedProject.id;
  //   this.empids = this.empprjService.getEmpidsByProid(id);
  //   for(let empid of this.empids){
  //     let empname : string;
  //     empname = this.employeeService.getEmployeeNameById(empid-1);
  //     this.empnames.push(empname);
  //   }
  // }

  // getTaskTitlesByProid(id:number): void{
  //   this.tasktitles = this.taskService.getTaskTitlesByProid(id);
  // }

  save(): void {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  deleteProject(): void{
    this.projectService.deleteProject(this.selectedProjectId-1);
    this.goBack();
  }
}