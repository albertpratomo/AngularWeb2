import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-detaildepartment',
  templateUrl: './detaildepartment.component.html',
  styleUrls: ['./detaildepartment.component.css']
})
export class DetaildepartmentComponent implements OnInit {

  selectedDepartmentId: number;
  selectedDepartment: Department;
  // names : string[];

  ngOnInit() {
    this.selectedDepartmentId = +this.route.snapshot.paramMap.get('id');
    this.getSelectedDepartment(this.selectedDepartmentId);
  }
  
  constructor(
    private modalService: NgbModal, 
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private location: Location
    ) {
  }

  getSelectedDepartment(id: number){
    this.departmentService.getDepartmentById(id).subscribe(department => this.selectedDepartment = department);
  }

  getNames(ids: number[]) : string[]{
    return this.employeeService.getEmployeeNames(ids);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.departmentService.updateDepartment(this.selectedDepartment)
    .subscribe(() => this.goBack());
  }

  deleteDepartment(): void{
    this.departmentService.deleteDepartment(this.selectedDepartment.id)
    .subscribe(() => this.goBack());
  }
}