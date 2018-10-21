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

  employees : Employee[];

  private apiUrl = 'http://i875395.hera.fhict.nl/api/386125/employee';

  constructor(private http: HttpClient)
  {
    this.getEmployees().subscribe(emps => this.employees = emps);
  }

  /** GET employeees from the server */
  getEmployees(): Observable<Employee[]> {
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

  getEmployeeNames(ids: number[]): string[] {
    const emp_names = [];
    this.employees.map(
      e => {
        if (ids.includes(e.id)) {
          emp_names.push(e.first_name+' '+e.last_name);
        }
      }
    );
    return emp_names;
  }

  /** POST: add a new employee to the server */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee, httpOptions).pipe(
        // tap((employee: Employee) => this.log(`added employee w/ id=${employee.id}`)),
        catchError(this.handleError<Employee>('addEmployee'))
        );
  }

  /** PUT: update the employee on the server */
  updateEmployee(employee: Employee): Observable<any> {
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
    }
    

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
