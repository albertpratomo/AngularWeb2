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
  co:number;

  ngOnInit() {
    this.getEmployeesFromService();
    this.co = this.employees.length;
    this.selectedEmployee= this.employees[0];
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

getEmployeesFromService(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }
   



	onSelect(e: Employee): void {
		this.selectedEmployee = e;
	}

createEmployee():void {
    
    let e: Employee = {
      id: this.employees[this.co-1].id+1,
      name: this.newName,
      email: this.newEmail,
      phone: this.newPhone
    }
    this.employees.push(e);
  }

  deleteEmployee(i: number): void{
    this.employees.splice(i,1);
    this.co = this.employees.length;
  }




}



