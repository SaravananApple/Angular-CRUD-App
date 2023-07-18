import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  public id:any;
  
  public employees: Employee = new Employee();

 
  
  constructor(private employeeService:EmployeeService, private route:ActivatedRoute, private router:Router) {}


 
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log(data)
      this.employees = data;


    },
    error => console.log(error))


    
   
  }


  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employees).subscribe(data => {
    this.router.navigateByUrl("employees")
    },
    error => {console.log(error)})
  }



}
