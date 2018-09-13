import { Component, OnInit } from '@angular/core';
import { Department} from '../department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 
  departments: Department[] = [
  { id: 1, name: 'Music',building:'R3',city:'Amsterdam'},
  { id: 2, name: 'Arts',building:'R1',city:'Amsterdam' },
  { id: 3, name: 'History',building:'R1',city:'Amsterdam' },
  { id: 4, name: 'Music',building:'R1',city:'Eindhoven' },
  { id: 5, name: 'History',building:'R1',city:'Eindhoven' },
  { id: 6, name: 'Music' ,building:'R1',city:'Eindhoven'},
  { id: 7, name: 'History',building:'R1',city:'Eindhoven' },
  { id: 8, name: 'Music',building:'R1',city:'Venlo' },
  { id: 9, name: 'Arts',building:'R1',city:'Rotterdam' },
  { id: 10, name: 'Arts' ,building:'R1',city:'Tillburg'}
];
 

selectedDepartment: Department;

onSelect(department: Department): void {
  this.selectedDepartment = department;
}

}
