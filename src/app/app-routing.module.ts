import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EmployeesComponent }      from './employees/employees.component';
import { DepartmentsComponent }      from './departments/departments.component';
import { ProjectsComponent }      from './projects/projects.component';
import { TasksComponent }      from './tasks/tasks.component';

import { DetailemployeeComponent } from './detailemployee/detailemployee.component';
import { DetailtaskComponent } from './detailtask/detailtask.component';
import { DetaildepartmentComponent } from './detaildepartment/detaildepartment.component';
import { DetailprojectComponent } from './detailproject/detailproject.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'departments', component: DepartmentsComponent },
	{ path: 'employees', component: EmployeesComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'tasks', component: TasksComponent },
	{ path: 'department/:id', component: DetaildepartmentComponent },
	{ path: 'employee/:id', component: DetailemployeeComponent },
	{ path: 'project/:id', component: DetailprojectComponent },
	{ path: 'task/:id', component: DetailtaskComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}