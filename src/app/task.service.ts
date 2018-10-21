import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private apiUrl = 'http://i875395.hera.fhict.nl/api/386125/task';

  tasks : Task[];

  constructor(private http: HttpClient) { 
      this.getTasks().subscribe(t => this.tasks = t);
  }

  /** GET taskes from the server */
  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
      .pipe(
        // tap(taskes => this.log('fetched taskes')),
        catchError(this.handleError('getTasks', []))
      );
  }

  /** GET task by id. Will 404 if id not found */
  getTaskById(id: number): Observable<Task> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<Task>(url).pipe(
      // tap(_ => this.log(`fetched task id=${id}`)),
      catchError(this.handleError<Task>(`getTaskById id=${id}`))
    );
  }

  /** POST: add a new task to the server */
  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions).pipe(
      // tap((task: Task) => this.log(`added task w/ id=${task.id}`)),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  /** PUT: update the task on the server */
  updateTask (task: Task): Observable<any> {
    const url = `${this.apiUrl}?id=${task.id}`;
    return this.http.put(url, task, httpOptions).pipe(
      // tap(_ => this.log(`updated task id=${task.id}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }

  /** DELETE: delete the task from the server */
  deleteTask (task: number): Observable<Task> {
    const url = `${this.apiUrl}?id=${task}`;

    return this.http.delete<Task>(url, httpOptions).pipe(
      // tap(_ => this.log(`deleted task id=${id}`)),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  // getTaskTitlesByProid(id:number): string[] {
  //   let titles : string[] = [];
  //   for (let task of this.tasks){
  //       if (task.proid == id) {
  //           titles.push(task.title);
  //       }
  //   }
  //   return titles;
  // }
}

