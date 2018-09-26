import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks : Task[];
  co : number;

  constructor() { 
    this.tasks = [
  { id: 1, title: 'Making task plan',deadline: '14-9-2018', proid:1},
  { id: 2, title: 'Making visual design',deadline: '14-9-2018', proid:2},
  { id: 3, title: 'Making database',deadline: '14-9-2018' , proid:3},
  { id: 4, title: 'Making mind map',deadline: '14-9-2018', proid:4},
  { id: 5, title: 'Doing lego programming',deadline: '21-10-2018', proid:1},
  { id: 6, title: 'Doing C# proramming',deadline: '21-10-2018' , proid:3},
  { id: 7, title: 'Doing js programming',deadline: '21-10-2018' , proid:5},
  { id: 8, title: 'Making website',deadline: '9-11-2018' , proid:4},
  { id: 9, title: 'Making report',deadline: '19-12-2018', proid:4},
  { id: 10, title:'Making presentation',deadline: '19-10-2018' , proid:2}
];
    this.co = this.tasks.length;
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  getTaskById(id: number): Observable<Task> {
    return of(this.tasks.find(task => task.id === id));
  }

  getTaskTitlesByProid(id:number): string[] {
    let titles : string[] = [];
    for (let task of this.tasks){
        if (task.proid == id) {
            titles.push(task.title);
        }
    }
    return titles;
  }

  createTask(newTitle:string, newDeadline:string,newProid:number):void {
    let newId : number; 
    if(this.co <= 0){
      newId = 1;
    }else{
      newId = this.tasks[this.co-1].id + 1;
    }

    let t: Task = {
      id: newId,
      title: newTitle,
      deadline: newDeadline,
      proid:newProid
    }
    this.tasks.push(t);
    this.co = this.tasks.length;
  }

  deleteTask(i: number): void{
    this.tasks.splice(i,1);
    this.co = this.tasks.length;
  }
}

