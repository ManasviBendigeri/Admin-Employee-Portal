import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeArray:any =[];
  constructor(private afd: AngularFireDatabase) {}
  ngOnInit(): void {
    this.afd.object('/employees').valueChanges().subscribe(employeeArray =>{
      console.log(employeeArray);
      this.employeeArray = Object.values(employeeArray);
      console.log(this.employeeArray);
      console.log(this.employeeArray[0]);
    })
     /*firebase.database() .ref('employees').on("value", function (snapshot) {
      const employeeList = snapshot.val();
      const Array = Object.values(employeeList);
      Array.forEach(element => {
        console.log(element);
        this.employeeArray.push(element);
        console.log(this.employeeArray);
      });
    })*/
  }
}
