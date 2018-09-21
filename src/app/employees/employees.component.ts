import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private modalService: NgbModal ,  private employeeService: EmployeeService) { }

  newName:string;
  newEmail:string;
  newPhone:string;
  employees: Employee[];
  selectedEmployee: Employee;

  ngOnInit() {
    this.getEmployeesFromService();
    this.selectedEmployee = this.employees[0];
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  onSelect(p: Employee): void {
    this.selectedEmployee = p;
  }

  getEmployeesFromService(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  createEmployee():void {
    this.employeeService.createEmployee(this.newName,this.newEmail,this.newPhone);
  }

  deleteEmployee(i: number): void{
    this.employeeService.deleteEmployee(i);
  }
}



