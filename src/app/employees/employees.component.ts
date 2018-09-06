import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   title = 'Employees';
  employees = ['Dayana', 'Albert', 'Wenjia', 'Chao','Tom'];

}
