import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private modalService: NgbModal ,  private taskService: TaskService, private projectService: ProjectService) { }

  newId:string;
  newTitle:string;
  newDeadline:string;
  newProid:number;
  tasks: Task[];
  selectedTask: Task;

  ngOnInit() {
    this.getTasksFromService();
    this.selectedTask = this.tasks[0];
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  onSelect(p: Task): void {
    this.selectedTask = p;
  }

  getTasksFromService(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  createTask():void {
    this.taskService.createTask(this.newTitle,this.newDeadline,this.newProid);
  }

  deleteTask(i: number): void{
    this.taskService.deleteTask(i);
  }

  getProjectNameById(i:number): string{
    return this.projectService.getProjectNameById(i-1);
  }
}
