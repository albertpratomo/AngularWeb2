import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.css']
})

export class DetailemployeeComponent implements OnInit {

	@Input() selectedEmployeeId: number;
  selectedEmployee: Employee;
  selectedDepartment: Department;

  ngOnInit() {
    this.getSelectedEmployee();
  }

	constructor(private modalService: NgbModal, private departmentService: DepartmentService, private employeeService: EmployeeService) { }
	
	open(content:any) {
    this.getSelectedDepartment();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  getSelectedEmployee(): void{
    this.selectedEmployee = this.employeeService.getEmployeeById(this.selectedEmployeeId-1);
  }

  getDepartmentNameById(i:number): string{
    return this.departmentService.getDepartmentNameById(i-1);
  }

  getSelectedDepartment(): void{
    this.selectedDepartment = this.departmentService.getDepartmentById(this.selectedEmployee.depid-1);
  }
}
