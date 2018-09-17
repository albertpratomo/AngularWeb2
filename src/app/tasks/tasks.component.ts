import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  newTitle:string;
  newMember:string;
  newDeadline:string;

  ngOnInit() {
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  tasks: Task[] = [
  { id: 1, title: 'Making project plan',member: 'Wenjia',deadline: '14-9-2018'},
  { id: 2, title: 'Making visual design',member: 'Dayana',deadline: '14-9-2018'},
  { id: 3, title: 'Making database',member:'Chao',deadline: '14-9-2018' },
  { id: 4, title: 'Making mind map',member:'Albert',deadline: '14-9-2018' },
  { id: 5, title: 'Doing lego programming',member: 'Albert',deadline: '21-10-2018' },
  { id: 6, title: 'Doing C# proramming',member:'Dayana',deadline: '21-10-2018' },
  { id: 7, title: 'Doing js programming',member: 'Wenjia',deadline: '21-10-2018' },
  { id: 8, title: 'Making website',member: 'Wenjia',deadline: '9-11-2018' },
  { id: 9, title: 'Making report',member: 'Chao',deadline: '19-12-2018' },
  { id: 10, title:'Making presentation',member: 'Albert',deadline: '19-10-2018' }
];

  co:number = this.tasks.length;

selectedTask:Task = this.tasks[0];

	onSelect(t: Task): void {
		this.selectedTask = t;
	}


  createTask():void {
    let co = this.tasks
    let t: Task = {
      id: this.co+1,
      title: this.newTitle,
      member: this.newMember,
      deadline: this.newDeadline
    }
    this.tasks.push(t);
  }

  deleteTask(i: number): void{
    this.tasks.splice(i,1);
    this.co--;
  }

}


