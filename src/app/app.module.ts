import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TasksComponent } from './tasks/tasks.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { DetaildepartmentComponent } from './detaildepartment/detaildepartment.component';


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
    DetaildepartmentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
