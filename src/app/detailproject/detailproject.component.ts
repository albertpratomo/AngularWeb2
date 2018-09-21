import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../project';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-detailproject',
  templateUrl: './detailproject.component.html',
  styleUrls: ['./detailproject.component.css']
})
export class DetailprojectComponent implements OnInit {

  @Input() selectedProject: Project;
  selectedDepartment: Department;

  ngOnInit() {
    this.getSelectedDepartment();
  }

  constructor(private modalService: NgbModal, private departmentService: DepartmentService) {}

  open(content) {
    this.getSelectedDepartment();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  getSelectedDepartment(): void{
    this.selectedDepartment = this.departmentService.getDepartmentById(this.selectedProject.depid-1);
  }
}