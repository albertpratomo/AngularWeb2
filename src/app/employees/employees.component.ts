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

  // newName:string;
  // newEmail:string;
  // newPhone:string;
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


  

  add(name: string, building : string): void {
    name = name.trim();
    building = building.trim();
    if (!name || !building) { return; }
    this.departmentService.addDepartment({ name, building } as Department)
      .subscribe(d => {
        this.departments.push(d);
      });
  }

  deleteDepartment(i: number): void{
    this.departments = this.departments.filter(h => h.id !== i);
    this.departmentService.deleteDepartment(i).subscribe();
  }

  getDepartmentNameById(i:number): string{
    return this.departmentService.getDepartmentNameById(i-1);
  }

}




