import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Department } from '../department';

@Component({
  selector: 'app-detaildepartment',
  templateUrl: './detaildepartment.component.html',
  styleUrls: ['./detaildepartment.component.css']
})
export class DetaildepartmentComponent implements OnInit {

  closeResult: string;

  ngOnInit() {
  }
 
  @Input() selectedDepartment: Department;
}
