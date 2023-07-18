import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
   
  employee: Employee[] = [];
 
  constructor(private employeeService:EmployeeService, private router:Router) {}

  contactForm = new FormGroup({
    empId: new FormControl(),
    eName: new FormControl(),
    mobile: new FormControl(),
    salary: new FormControl()
  })

  ngOnInit(): void {
    
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.contactForm.value).subscribe( data => {
     console.log(data)
     this.router.navigateByUrl("employees");
    },
    error => console.log(error))
  }

  gotToEmployeeList(){
    this.router.navigateByUrl("employees");
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.saveEmployee();

  }

}
