import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  newName:string;
  newEmail:string;
  newPhone:string;

  ngOnInit() {
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

   
   employees: Employee[] = [
  { id: 1, name: 'Mr. Nice',email:'coco@gmail.com',phone:'1234567890'},
  { id: 2, name: 'Narco', email:'coco@gmail.com',phone:'1234567890'},
  { id: 3, name: 'Bombasto', email:'coco@gmail.com',phone:'1234567890'},
  { id: 4, name: 'Celeritas', email:'coco@gmail.com',phone:'1234567890'},
  { id: 5, name: 'Magneta', email:'coco@gmail.com',phone:'1234567890'},
  { id: 6, name: 'RubberMan', email:'coco@gmail.com',phone:'1234567890'},
  { id: 7, name: 'Dznama', email:'coco@gmail.com',phone:'1234567890'},
  { id: 8, name: 'Dr IQ', email:'coco@gmail.com',phone:'1234567890'},
  { id: 9, name: 'Magma', email:'coco@gmail.com',phone:'1234567890'},
  { id: 10, name: 'Tornado', email:'coco@gmail.com',phone:'1234567890'}
];

co:number = this.employees.length;


	selectedEmployee: Employee = this.employees[0];

	onSelect(e: Employee): void {
		this.selectedEmployee = e;
	}

createEmployee():void {
    let co = this.employees
    let e: Employee = {
      id: this.co+1,
      name: this.newName,
      email: this.newEmail,
      phone: this.newPhone
    }
    this.employees.push(e);
  }

  deleteEmployee(i: number): void{
    this.employees.splice(i,1);
    this.co--;
  }




}



