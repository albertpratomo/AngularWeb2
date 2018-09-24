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
        { id: 1, name: 'Mr. Nice',email:'coco@gmail.com',phone:'1234567890',depid: 1},
        { id: 2, name: 'Nao', email:'coco@gmail.com',phone:'1234567890',depid: 2},
        { id: 3, name: 'Bombasto', email:'coco@gmail.com',phone:'1234567890',depid: 5},
        { id: 4, name: 'Celeritas', email:'coco@gmail.com',phone:'1234567890',depid: 2},
        { id: 5, name: 'Magneta', email:'coco@gmail.com',phone:'1234567890',depid: 3},
        { id: 6, name: 'RubberMan', email:'coco@gmail.com',phone:'1234567890',depid: 5},
        { id: 7, name: 'Dznama', email:'coco@gmail.com',phone:'1234567890',depid: 2},
        { id: 8, name: 'Dr IQ', email:'coco@gmail.com',phone:'1234567890',depid: 4},
        { id: 9, name: 'Magma', email:'coco@gmail.com',phone:'1234567890',depid: 1},
        { id: 10, name: 'Tornado', email:'coco@gmail.com',phone:'1234567890',depid: 4}
        ];
        this.co = this.employees.length;
    }

    getEmployees(): Observable<Employee[]> {
      return of(this.employees);
    }

    getEmployeeById(id:number): Employee {
      return this.employees[id];
    }

    getEmployeesNamesByDepId(id:number): string[] {
      let names : string[] = [];
      for (let employee of this.employees){
          if (employee.depid == id) {
              names.push(employee.name);
          }
      }
      console.log(names);
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
