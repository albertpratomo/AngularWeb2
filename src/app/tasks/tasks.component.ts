import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private modalService: NgbModal,  private taskService: TaskService) { }
  newTitle:string;
  newMember:string;
  newDeadline:string;
  tasks:Task[];
  selectedTask:Task;
  co:number;

  ngOnInit() {
      this.getTasksFromService();
      this.co = this.tasks.length;
      this.selectedTask = this.tasks[0];
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  getTasksFromService(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

	onSelect(t: Task): void {
		this.selectedTask = t;
	}


  createTask():void {
    let t: Task = {
      id: this.tasks[this.co-1].id + 1,
      title: this.newTitle,
      member: this.newMember,
      deadline: this.newDeadline
    }
    this.tasks.push(t);
    this.co = this.tasks.length;
  }

  deleteTask(i: number): void{
    this.tasks.splice(i,1);
    this.co = this.tasks.length;
  }

}


