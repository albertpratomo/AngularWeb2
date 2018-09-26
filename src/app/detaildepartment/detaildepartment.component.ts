import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detaildepartment',
  templateUrl: './detaildepartment.component.html',
  styleUrls: ['./detaildepartment.component.css']
})
export class DetaildepartmentComponent implements OnInit {

  selectedDepartmentId: number;
  selectedDepartment: Department;
  names : string[];

  ngOnInit() {
     this.selectedDepartmentId = +this.route.snapshot.paramMap.get('id');
    this.getSelectedDepartment(this.selectedDepartmentId);
  }
 
  constructor(
    private modalService: NgbModal, 
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  open(content:any) {
    this.getEmployeesNamesByDepId(this.selectedDepartment.id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
    });
  }

 getSelectedDepartment(id: number){
    this.departmentService.getDepartmentById(id).subscribe(department => this.selectedDepartment = department);
  }
  getEmployeesNamesByDepId(id:number): void {
    this.names =  this.employeeService.getEmployeesNamesByDepId(id);
  }
  goBack(): void {
    this.location.back();
  }

  deleteDepartment(): void{
    this.departmentService.deleteDepartment(this.selectedDepartmentId-1);
    this.goBack();
}
}