import { Injectable } from '@angular/core';
import { Department } from './department';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class DepartmentService {

	private apiUrl = 'http://i875395.hera.fhict.nl/api/386125/department';

	constructor(
	 private http: HttpClient
	) {}

	/** GET departmentes from the server */
	getDepartments (): Observable<Department[]> {
	  return this.http.get<Department[]>(this.apiUrl)
	    .pipe(
	      // tap(departmentes => this.log('fetched departmentes')),
	      catchError(this.handleError('getDepartments', []))
	    );
	}

	/** GET department by id. Will 404 if id not found */
	getDepartmentById(id: number): Observable<Department> {
	  const url = `${this.apiUrl}?id=${id}`;
	  return this.http.get<Department>(url).pipe(
	    // tap(_ => this.log(`fetched department id=${id}`)),
	    catchError(this.handleError<Department>(`getDepartmentById id=${id}`))
	  );
	}

	/** POST: add a new department to the server */
	addDepartment (department: Department): Observable<Department> {
	  return this.http.post<Department>(this.apiUrl, department, httpOptions).pipe(
	    // tap((department: Department) => this.log(`added department w/ id=${department.id}`)),
	    catchError(this.handleError<Department>('addDepartment'))
	  );
	}

	/** PUT: update the department on the server */
	updateDepartment (department: Department): Observable<any> {
	  const url = `${this.apiUrl}?id=${department.id}`;
	  return this.http.put(url, department, httpOptions).pipe(
	    // tap(_ => this.log(`updated department id=${department.id}`)),
	    catchError(this.handleError<any>('updateDepartment'))
	  );
	}

	/** DELETE: delete the department from the server */
	deleteDepartment (department: number): Observable<Department> {
	  const url = `${this.apiUrl}?id=${department}`;

	  return this.http.delete<Department>(url, httpOptions).pipe(
	    // tap(_ => this.log(`deleted department id=${id}`)),
	    catchError(this.handleError<Department>('deleteDepartment'))
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

	// getDepartmentNameById(id:number): string {
	//   return this.departments[id].name;
	// }
}
