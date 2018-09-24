import { Injectable } from '@angular/core';
import { Empprj } from './empprj';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EmpprjService {

	empprjs : Empprj[];
	co : number;

	constructor() { 
		this.empprjs = [
		{id: 1, empid: 1, proid: 1},
		{id: 2, empid: 2, proid: 1},
		{id: 3, empid: 3, proid: 1},
		{id: 4, empid: 1, proid: 2},
		{id: 5, empid: 4, proid: 2},
		{id: 6, empid: 5, proid: 2},
		{id: 7, empid: 6, proid: 3},
		{id: 9, empid: 1, proid: 3},
		{id: 8, empid: 9, proid: 4},
		{id: 9, empid: 8, proid: 4},
		{id: 9, empid: 2, proid: 4},
		{id: 9, empid: 6, proid: 5},
		{id: 9, empid: 7, proid: 5},
		{id: 9, empid: 10, proid: 5}
		];
		this.co = this.empprjs.length;
	}

	getEmpprjs(): Observable<Empprj[]> {
	  return of(this.empprjs);
	}

	getEmpprjById(id:number): Empprj {
	  return this.empprjs[id];
	}

	getEmpidsByProid(id:number): number[] {
      let empids : number[] = [];
      for (let empprj of this.empprjs){
          if (empprj.proid == id) {
              empids.push(empprj.empid);
          }
      }
      return empids;
    }

    getProidsByEmpid(id:number): number[] {
      let proids : number[] = [];
      for (let empprj of this.empprjs){
          if (empprj.empid == id) {
              proids.push(empprj.proid);
          }
      }
      return proids;
    }

	createEmpprj(newEmpid:number, newProid:number):void {
		let newId : number; 
		if(this.co <= 0){
			newId = 1;
		}else{
			newId = this.empprjs[this.co-1].id + 1;
		}

		let p: Empprj = {
			id: newId,
			empid: newEmpid,
			proid: newProid
		}
		this.empprjs.push(p);
		this.co = this.empprjs.length;
	}

	deleteEmpprj(i: number): void{
		this.empprjs.splice(i,1);
		this.co = this.empprjs.length;
	}
}
