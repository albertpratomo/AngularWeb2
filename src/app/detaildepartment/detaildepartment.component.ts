import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-detaildepartment',
  templateUrl: './detaildepartment.component.html',
  styleUrls: ['./detaildepartment.component.css']
})
export class DetaildepartmentComponent implements OnInit {

  @Input() selectedDepartmentId: number;
  selectedDepartment: Department;
  names : string[];

  ngOnInit() {
    this.getDepartmentById(this.selectedDepartmentId);
  }
 
  constructor(private modalService: NgbModal, private employeeService: EmployeeService, private departmentService: DepartmentService) {}

  open(content:any) {
    this.getEmployeesNamesByDepId(this.selectedDepartment.id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
    });
  }

  getDepartmentById(id: number){
    this.selectedDepartment = this.departmentService.getDepartmentById(id-1);
  }

  getEmployeesNamesByDepId(id:number): void {
    this.names =  this.employeeService.getEmployeesNamesByDepId(id);
  }
}
