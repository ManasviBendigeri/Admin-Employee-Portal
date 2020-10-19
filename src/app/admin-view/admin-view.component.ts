import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  employeeArray:any =[];
  leaveDetails:any=[];
  salary:any=[];

  constructor(private afd: AngularFireDatabase) { }

  ngOnInit(): void {
    this.afd.object('/employees').valueChanges().subscribe(employeeArray =>{
      //console.log(employeeArray);
      this.employeeArray = Object.values(employeeArray);
      this.employeeArray = this.employeeArray[0];
      console.log(this.employeeArray);
      //console.log(this.employeeArray[0]);
    })
    this.afd.object('/leaveDetails').valueChanges().subscribe(leaveDetails =>{
     // console.log(leaveDetails);
      this.leaveDetails = Object.values(leaveDetails);
      this.leaveDetails = this.leaveDetails[0];
      this.leaveDetails = Object.values(this.leaveDetails);
      this.leaveDetails = this.leaveDetails[0];
      //console.log(this.leaveDetails);
      //console.log(this.employeeArray[0]);
    })
    const key = 'AyFuqwkQEAZdFOOJKf5VFt0DBBh1';
    this.afd.object(key).valueChanges().subscribe(salary =>{
    this.salary = Object.values(salary);
    this.salary = Object.values(this.salary);
    this.salary = this.salary[1];
    this.salary = Object.values(this.salary);
    this.salary = this.salary[0];
    console.log(this.salary);
    })
  }
}
