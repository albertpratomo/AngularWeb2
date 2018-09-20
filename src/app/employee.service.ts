import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	constructor() { }

	getEmployees(): Observable<Employee[]> {
	  let employees: Employee[] = [
		{ id: 1, name: 'Mr. Nice',email:'coco@gmail.com',phone:'1234567890'},
    { id: 2, name: 'Nao', email:'coco@gmail.com',phone:'1234567890'},
    { id: 3, name: 'Bombasto', email:'coco@gmail.com',phone:'1234567890'},
    { id: 4, name: 'Celeritas', email:'coco@gmail.com',phone:'1234567890'},
    { id: 5, name: 'Magneta', email:'coco@gmail.com',phone:'1234567890'},
    { id: 6, name: 'RubberMan', email:'coco@gmail.com',phone:'1234567890'},
    { id: 7, name: 'Dznama', email:'coco@gmail.com',phone:'1234567890'},
    { id: 8, name: 'Dr IQ', email:'coco@gmail.com',phone:'1234567890'},
    { id: 9, name: 'Magma', email:'coco@gmail.com',phone:'1234567890'},
    { id: 10, name: 'Tornado', email:'coco@gmail.com',phone:'1234567890'}
  		];

	  return of(employees);
	}
}