
import { Department} from '../department';
import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
   
})
export class DepartmentsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  newName:string;
  newBuilding:string;
  newCity:string; 


ngOnInit() {
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
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
 
co:number=this.departments.length;


selectedDepartment: Department=this.departments[0];

onSelect(department: Department): void {
  this.selectedDepartment = department;
}

createDepartment():void {
    let co = this.departments
    let department: Department = {
      id: this.co+1,
      name: this.newName,
      building: this.newBuilding,
      city: this.newCity
    }
    this.departments.push(department);
  }

  deleteDepartment(i: number): void{
    this.departments.splice(i,1);
    this.co--;
  }
}




