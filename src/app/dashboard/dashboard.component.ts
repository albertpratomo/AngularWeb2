import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	departments: Department[];
	employees: Employee[];
	projects: Project[];
	tasks: Task[];

	constructor(private departmentService: DepartmentService, private employeeService: EmployeeService, private projectService: ProjectService, private taskService: TaskService) { }

	ngOnInit() {
		this.getDepartmentsFromService();
		this.getEmployeesFromService();
		this.getProjectsFromService();
		this.getTasksFromService();
	}

	getDepartmentsFromService(): void {
		this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
	}

	getEmployeesFromService(): void {
		this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
	}

	getProjectsFromService(): void {
		this.projectService.getProjects().subscribe(projects => this.projects = projects);
	}

	getTasksFromService(): void {
		this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
	}
}
