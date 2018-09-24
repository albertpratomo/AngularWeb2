import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { EmpprjService } from '../empprj.service';
import { EmployeeService } from '../employee.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-detailproject',
  templateUrl: './detailproject.component.html',
  styleUrls: ['./detailproject.component.css']
})
export class DetailprojectComponent implements OnInit {

  @Input() selectedProjectId: number;
  selectedProject: Project;
  selectedDepartment: Department;
  empids: number[] = [];
  empnames: string[] = [];
  tasktitles: string[] = [];

  ngOnInit() {
    this.getSelectedProject(this.selectedProjectId);
    this.getSelectedDepartment();
    this.getTaskTitlesByProid(this.selectedProjectId);
    this.getEmpnamesByProid();
  }

  constructor(private modalService: NgbModal, private departmentService: DepartmentService, private empprjService: EmpprjService, private employeeService: EmployeeService, private projectService: ProjectService, private taskService: TaskService) {}

  open(content) {
    this.getSelectedDepartment();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  getSelectedProject(id: number){
    this.selectedProject = this.projectService.getProjectById(id-1);
  }

  getSelectedDepartment(): void{
    this.selectedDepartment = this.departmentService.getDepartmentById(this.selectedProject.depid-1);
  }

  getEmpnamesByProid(): void{
    let id = this.selectedProject.id;
    this.empids = this.empprjService.getEmpidsByProid(id);
    for(let empid of this.empids){
      let empname : string;
      empname = this.employeeService.getEmployeeNameById(empid-1);
      this.empnames.push(empname);
    }
  }

  getTaskTitlesByProid(id:number): void{
    this.tasktitles = this.taskService.getTaskTitlesByProid(id);
  }
}