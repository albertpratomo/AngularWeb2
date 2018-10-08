import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private modalService: NgbModal ,  private employeeService: EmployeeService, private departmentService: DepartmentService) { }

  employees: Employee[];
  // selectedEmployee: Employee;

  ngOnInit() {
    this.getEmployeesFromService();
    // this.selectedEmployee = this.employees[0];
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  // onSelect(p: Employee): void {
  //   this.selectedEmployee = p;
  // }

  getEmployeesFromService(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  add(first_name: string, last_name: string, birth_date: string, department_id: number): void {
    first_name = first_name.trim();
    last_name = last_name.trim();
    birth_date = birth_date.trim();
    if (!first_name || !last_name || !birth_date || !department_id) { return; }
    this.employeeService.addEmployee({ department_id, first_name, last_name  } as Employee)
      .subscribe(d => {
        this.employees.push(d);
      });
  }

  deleteEmployee(i: number): void{
    this.employees = this.employees.filter(h => h.id !== i);
    this.employeeService.deleteEmployee(i).subscribe();
  }

  // getDepartmentNameById(i:number): string{
  //   return this.departmentService.getDepartmentNameById(i-1);
  // }

}




