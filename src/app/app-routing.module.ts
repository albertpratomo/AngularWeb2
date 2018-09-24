import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EmployeesComponent }      from './employees/employees.component';
import { DepartmentsComponent }      from './departments/departments.component';
import { ProjectsComponent }      from './projects/projects.component';
import { TasksComponent }      from './tasks/tasks.component';


const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'departments', component: DepartmentsComponent },
	{ path: 'employees', component: EmployeesComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'tasks', component: TasksComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}