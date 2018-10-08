import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private apiUrl = 'http://i875395.hera.fhict.nl/api/406448/employee';

    // employees : Employee[];
    // co : number;

    constructor(private http: HttpClient)
   { 
        // this.employees = [
        // { id: 1, name: 'Emp 1',email:'coco@gmail.com',phone:'1234567890',depid: 1},
        // { id: 2, name: 'Emp 2', email:'coco@gmail.com',phone:'1234567890',depid: 2},
        // { id: 3, name: 'Emp 3', email:'coco@gmail.com',phone:'1234567890',depid: 5},
        // { id: 4, name: 'Emp 4', email:'coco@gmail.com',phone:'1234567890',depid: 2},
        // { id: 5, name: 'Emp 5', email:'coco@gmail.com',phone:'1234567890',depid: 3},
        // { id: 6, name: 'Emp 6', email:'coco@gmail.com',phone:'1234567890',depid: 5},
        // { id: 7, name: 'Emp 7', email:'coco@gmail.com',phone:'1234567890',depid: 2},
        // { id: 8, name: 'Emp 8', email:'coco@gmail.com',phone:'1234567890',depid: 4},
        // { id: 9, name: 'Emp 9', email:'coco@gmail.com',phone:'1234567890',depid: 1},
        // { id: 10, name: 'Emp 10', email:'coco@gmail.com',phone:'1234567890',depid: 4}
        // ];
        // this.co = this.employees.length;
    }

/** GET employeees from the server */
    getEmployees (): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.apiUrl)
        .pipe(
          // tap(employeees => this.log('fetched employeees')),
          catchError(this.handleError('getEmployees', []))
        );
    }

    /** GET employee by id. Will 404 if id not found */
    getEmployeeById(id: number): Observable<Employee> {
      const url = `${this.apiUrl}?id=${id}`;
      return this.http.get<Employee>(url).pipe(
        // tap(_ => this.log(`fetched employee id=${id}`)),
        catchError(this.handleError<Employee>(`getEmployeeById id=${id}`))
      );
    }

    /** POST: add a new employee to the server */
    addEmployee (employee: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.apiUrl, employee, httpOptions).pipe(
        // tap((employee: Employee) => this.log(`added employee w/ id=${employee.id}`)),
        catchError(this.handleError<Employee>('addEmployee'))
      );
    }

    /** PUT: update the employee on the server */
    updateEmployee (employee: Employee): Observable<any> {
      const url = `${this.apiUrl}?id=${employee.id}`;
      return this.http.put(url, employee, httpOptions).pipe(
        // tap(_ => this.log(`updated employee id=${employee.id}`)),
        catchError(this.handleError<any>('updateEmployee'))
      );
    }

    /** DELETE: delete the employee from the server */
    deleteEmployee (employee: number): Observable<Employee> {
      const url = `${this.apiUrl}?id=${employee}`;

      return this.http.delete<Employee>(url, httpOptions).pipe(
        // tap(_ => this.log(`deleted employee id=${id}`)),
        catchError(this.handleError<Employee>('deleteEmployee'))
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
    

    // getEmployeeNameById(id:number): string {
    //   return this.employees[id].name;
    // }

    // getEmployeesNamesByDepId(id:number): string[] {
    //   let names : string[] = [];
    //   for (let employee of this.employees){
    //       if (employee.depid == id) {
    //           names.push(employee.name);
    //       }
    //   }
    //   // console.log(names);
    //   return names;
    // }

    

    
}
