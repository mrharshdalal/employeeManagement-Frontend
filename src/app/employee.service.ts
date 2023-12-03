import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "./employee";
import { Observable } from "rxjs";
import { environment } from "../environments/environments";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService{
    private apiServerUrl = "http://localhost:8080/employee/";

    constructor(private http: HttpClient){

    }
    public getEmployee(): Observable<Employee[]>{
        return this.http.get<any>(`${this.apiServerUrl}getAllEmployees`);
    }
    public addEmployee(employee: Employee): Observable<Employee>{
        return this.http.post<Employee>(`${this.apiServerUrl}/employee/addEmployee`, employee);
    }
    public updateEmployee(employee: Employee): Observable<Employee>{
        return this.http.put<Employee>(`${this.apiServerUrl}/employee/updateEmployee`, employee);
    }
    public deleteEmployee(employeeId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/employee/deleteEmployee/${employeeId}`);
    }
}