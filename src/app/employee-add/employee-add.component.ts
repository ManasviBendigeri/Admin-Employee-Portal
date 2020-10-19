import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  EmployeeDetails :FormGroup;
  salarySlip:FormGroup;
  constructor( private afd : AngularFireDatabase ) { }
  ngOnInit(): void {
    this.initialiseForm();
  }
  initialiseForm(){
      this.EmployeeDetails = new FormGroup({
      //$key: new FormControl(null),
      url : new FormControl(''),
      name: new FormControl('',Validators.required),
      email: new FormControl(''),
      dob : new FormControl(''),
      doj : new FormControl(''),
      place : new FormControl(''),
      title:new FormControl('')
    });
    this.salarySlip = new FormGroup({
      //$key: new FormControl(null),
      basic : new FormControl(''),
      hra: new FormControl('',Validators.required),
      ma: new FormControl(''),
      na : new FormControl(''),
      pt : new FormControl(''),
      pf : new FormControl(''),
      conveyance:new FormControl(''),
      itr:new FormControl('')
    });
  }
  addNewEmployee(){
   alert("Employee Added");
   const key = 'AyFuqwkQEAZdFOOJKf5VFt0DBBh1';
   const value_personal = this.EmployeeDetails.value;
   const value_salary = this.salarySlip.value;
   console.log(value_personal);
   console.log(value_salary);
   this.afd.list(key).push(value_personal);
   this.afd.list(key+'/salarySlip').push(value_salary);
  }
}
