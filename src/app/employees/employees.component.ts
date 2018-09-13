import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   
   employees: Employee[] = [
  { id: 11, name: 'Mr. Nice',email:'coco@gmail.com',phone:'1234567890'},
  { id: 12, name: 'Narco', email:'coco@gmail.com',phone:'1234567890'},
  { id: 13, name: 'Bombasto', email:'coco@gmail.com',phone:'1234567890'},
  { id: 14, name: 'Celeritas', email:'coco@gmail.com',phone:'1234567890'},
  { id: 15, name: 'Magneta', email:'coco@gmail.com',phone:'1234567890'},
  { id: 16, name: 'RubberMan', email:'coco@gmail.com',phone:'1234567890'},
  { id: 17, name: 'Dznama', email:'coco@gmail.com',phone:'1234567890'},
  { id: 18, name: 'Dr IQ', email:'coco@gmail.com',phone:'1234567890'},
  { id: 19, name: 'Magma', email:'coco@gmail.com',phone:'1234567890'},
  { id: 20, name: 'Tornado', email:'coco@gmail.com',phone:'1234567890'}
];

	selectedEmployee: Employee = this.employees[0];

	onSelect(e: Employee): void {
		this.selectedEmployee = e;
	}
}



