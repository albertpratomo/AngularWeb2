import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TasksComponent } from './tasks/tasks.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';

// BOOTSTRAP
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
// BOOTSTRAP

import { DetailemployeeComponent } from './detailemployee/detailemployee.component';
import { DetailtaskComponent } from './detailtask/detailtask.component';
import { DetaildepartmentComponent } from './detaildepartment/detaildepartment.component';
import { DetailprojectComponent } from './detailproject/detailproject.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    TasksComponent,
    DepartmentsComponent,
    EmployeesComponent,
    TabsComponent,
    NavbarComponent,
    ProjectsComponent,
    DetailemployeeComponent,
    DetailtaskComponent,
    DetaildepartmentComponent,
    DetailprojectComponent,
    DashboardComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
