import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { ProjectService } from '../project.service';
import { Department } from '../department';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
    private modalService: NgbModal ,  
    private taskService: TaskService, 
    private projectService: ProjectService,
    private departmentService: DepartmentService) { }

  tasks: Task[];
  departments: Department[];
  // selectedTask: Task;

  ngOnInit() {
    this.getTasksFromService();
    this.getDepartmentsFromService();
    // this.selectedTask = this.tasks[0];
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  getTasksFromService(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  getDepartmentsFromService(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

  add(name: string, due_date : string, department_id:number): void {
    name = name.trim();
    due_date = due_date.trim();
    if (!name || !due_date || !department_id) { return; }
    this.taskService.addTask({ department_id, name  } as Task)
      .subscribe(d => {
        this.tasks.push(d);
      });
  }

  deleteTask(i: number): void{
    this.tasks = this.tasks.filter(h => h.id !== i);
    this.taskService.deleteTask(i).subscribe();
  }
   
  getProjectNameById(i:number): string{
    return this.projectService.getProjectNameById(i-1);
  }
}
