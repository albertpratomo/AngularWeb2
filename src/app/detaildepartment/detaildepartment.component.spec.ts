import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildepartmentComponent } from './detaildepartment.component';

describe('DetaildepartmentComponent', () => {
  let component: DetaildepartmentComponent;
  let fixture: ComponentFixture<DetaildepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaildepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
