import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private modalService: NgbModal ,  private departmentService: DepartmentService) { }

  newName:string;
  newBuilding:string;
  newCity:string;
  departments: Department[];
  selectedDepartment: Department;

  ngOnInit() {
    this.getDepartmentsFromService();
    this.selectedDepartment = this.departments[0];
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  onSelect(p: Department): void {
    this.selectedDepartment = p;
  }

  getDepartmentsFromService(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

  createDepartment():void {
    this.departmentService.createDepartment(this.newName,this.newBuilding,this.newCity);
  }

  deleteDepartment(i: number): void{
    this.departmentService.deleteDepartment(i);
  }
}
