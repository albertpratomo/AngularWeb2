import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { ProjectService } from '../project.service';
import { EmpprjService } from '../empprj.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.css']
})

export class DetailemployeeComponent implements OnInit {

  selectedEmployeeId: number;
  selectedEmployee: Employee;
  selectedDepartment: Department;
  projecttitles: string[] = [];

  ngOnInit() {
    this.selectedEmployeeId = +this.route.snapshot.paramMap.get('id');
    this.getSelectedEmployee(this.selectedEmployeeId);
    // this.getProtitlesByEmpid();

  }

	constructor(
    private modalService: NgbModal, 
    private departmentService: DepartmentService, 
    private employeeService: EmployeeService, 
    private projectService: ProjectService, 
    private empprjService: EmpprjService,
    private route: ActivatedRoute,
    private location: Location
    ) { }
	

  getSelectedEmployee(id: number){
    this.employeeService.getEmployeeById(id).subscribe(employee => this.selectedEmployee = employee);
  }

  // getDepartmentNameById(i:number): string{
  //   return this.departmentService.getDepartmentNameById(i-1);
  // }

  // getSelectedDepartment(): void{
  //   // this.selectedDepartment = this.departmentService.getDepartmentById(this.selectedEmployee.depid-1);
  //   this.departmentService.getDepartmentById(this.selectedEmployee.depid).subscribe(department => this.selectedDepartment = department);
  // }

  // getProtitlesByEmpid(): void{
  //   let id = this.selectedEmployeeId;
  //   let proids : number[] = [];
  //   proids = this.empprjService.getProidsByEmpid(id);
  //   for(let proid of proids){
  //     let title : string;
  //     title = this.projectService.getProjectNameById(proid-1);
  //     this.projecttitles.push(title);
  //   }
  // }
  
  goBack(): void {
    this.location.back();
  }
  
  save(): void {
    this.employeeService.updateEmployee(this.selectedEmployee)
    .subscribe(() => this.goBack());
  }

  deleteEmployee(): void{
    this.employeeService.deleteEmployee(this.selectedEmployee.id)
    .subscribe(() => this.goBack());
  }
}
