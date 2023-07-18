import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseUrl = "http://localhost:8082/employees";

private addUrl = "http://localhost:8082/employee";

  constructor( private httpClient:HttpClient) { }

getEmployeeList():Observable <Employee[]>{
  return this.httpClient.get <Employee[]> (`${this.baseUrl}`);
}

createEmployee(employee:any):Observable<any>{
return this.httpClient.post(`${this.addUrl}`, employee)
}

getEmployeeById(id:number):Observable<any>{

return this.httpClient.get<Employee[]>(this.baseUrl+"/"+id)
}

updateEmployee(id:number, employee:Employee):Observable<Object>{
 return this.httpClient.put(`${this.addUrl}/${id}`, employee)
}

deleteEmployee(id:number):Observable<Object>{
  return this.httpClient.delete(this.addUrl+"/"+id);
}

}
