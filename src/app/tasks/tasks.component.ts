import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  title = 'Tasks';
  tasks = ['Buy groceries', 'Eat medicine', 'Take a bath', 'Fix bicycle'];
}
