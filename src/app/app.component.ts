import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'employeemangementapp';

  public employees!: Employee[];
  constructor(private employeeService: EmployeeService){}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void{
    this.employeeService.getEmployee().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
