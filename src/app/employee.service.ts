import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    employees : Employee[];
    co : number;

    constructor() { 
        this.employees = [
        { id: 1, name: 'Emp 1',email:'coco@gmail.com',phone:'1234567890',depid: 1},
        { id: 2, name: 'Emp 2', email:'coco@gmail.com',phone:'1234567890',depid: 2},
        { id: 3, name: 'Emp 3', email:'coco@gmail.com',phone:'1234567890',depid: 5},
        { id: 4, name: 'Emp 4', email:'coco@gmail.com',phone:'1234567890',depid: 2},
        { id: 5, name: 'Emp 5', email:'coco@gmail.com',phone:'1234567890',depid: 3},
        { id: 6, name: 'Emp 6', email:'coco@gmail.com',phone:'1234567890',depid: 5},
        { id: 7, name: 'Emp 7', email:'coco@gmail.com',phone:'1234567890',depid: 2},
        { id: 8, name: 'Emp 8', email:'coco@gmail.com',phone:'1234567890',depid: 4},
        { id: 9, name: 'Emp 9', email:'coco@gmail.com',phone:'1234567890',depid: 1},
        { id: 10, name: 'Emp 10', email:'coco@gmail.com',phone:'1234567890',depid: 4}
        ];
        this.co = this.employees.length;
    }

    getEmployees(): Observable<Employee[]> {
      return of(this.employees);
    }

    getEmployeeById(id:number): Employee {
      return this.employees[id];
    }

    getEmployeeById(id: number): Observable<Employee> {
      return of(this.employees.find(employee => employee.id === id));
    }

    getEmployeeNameById(id:number): string {
      return this.employees[id].name;
    }

    getEmployeesNamesByDepId(id:number): string[] {
      let names : string[] = [];
      for (let employee of this.employees){
          if (employee.depid == id) {
              names.push(employee.name);
          }
      }
      // console.log(names);
      return names;
    }

    createEmployee(newName:string, newEmail:string, newPhone:string):void {
        let newId : number; 
        if(this.co <= 0){
            newId = 1;
        }else{
            newId = this.employees[this.co-1].id + 1;
        }

        let p: Employee = {
            id: newId,
            name: newName,
            email: newEmail,
            phone: newPhone,
            depid: 1
        }
        this.employees.push(p);
        this.co = this.employees.length;
    }

    deleteEmployee(i: number): void{
        this.employees.splice(i,1);
        this.co = this.employees.length;
    }
}
