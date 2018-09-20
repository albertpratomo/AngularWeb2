import { Injectable } from '@angular/core';
import { Department } from './department';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DepartmentService {

	departments : Department[];
	co : number;

	constructor() { 
		this.departments = [
		  { id: 1, name: 'Human Resource',building:'R3',city:'Amsterdam'},
		  { id: 2, name: 'Administration',building:'R1',city:'Amsterdam' },
		  { id: 3, name: 'Design',building:'R1',city:'Amsterdam' },
		  { id: 4, name: 'Engineering',building:'R1',city:'Eindhoven' },
		  { id: 5, name: 'Customer Support',building:'R1',city:'Eindhoven' }
		];

		this.co = this.departments.length;
	}

	getDepartments(): Observable<Department[]> {
	  return of(this.departments);
	}

	createDepartment(newName:string, newBuilding:string, newCity:string):void {
		let newId : number; 
		if(this.co <= 0){
			newId = 1;
		}else{
			newId = this.departments[this.co-1].id + 1;
		}

		let p: Department = {
			id: newId,
			name: newName,
			building: newBuilding,
			city: newCity
		}
		this.departments.push(p);
		this.co = this.departments.length;
	}

	deleteDepartment(i: number): void{
		this.departments.splice(i,1);
		this.co = this.departments.length;
	}
}
