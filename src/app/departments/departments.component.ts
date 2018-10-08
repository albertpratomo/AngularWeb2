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

  constructor(
    private modalService: NgbModal ,  
    private departmentService: DepartmentService) { }

  departments: Department[];

  ngOnInit() {
    this.getDepartmentsFromService();
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  getDepartmentsFromService(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

  add(name: string, building : string): void {
    name = name.trim();
    building = building.trim();
    if (!name || !building) { return; }
    this.departmentService.addDepartment({ name, building } as Department)
      .subscribe(d => {
        this.departments.push(d);
      });
  }

  deleteDepartment(i: number): void{
    this.departments = this.departments.filter(h => h.id !== i);
    this.departmentService.deleteDepartment(i).subscribe();
  }
}
