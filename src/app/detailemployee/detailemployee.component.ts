import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee';

@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.css']
})

export class DetailemployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	@Input() selectedEmployee: Employee;
}
