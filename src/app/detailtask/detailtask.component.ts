import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../task';

@Component({
  selector: 'app-detailtask',
  templateUrl: './detailtask.component.html',
  styleUrls: ['./detailtask.component.css']
})
export class DetailtaskComponent implements OnInit {


  ngOnInit() {
  }

  @Input() selectedTask: Task;

    constructor(private modalService: NgbModal) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });


}
}