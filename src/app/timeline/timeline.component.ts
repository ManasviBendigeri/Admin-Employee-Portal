import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { AngularFireAuth} from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import {AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {

  @ViewChild('timeline') employeeWork: NgForm;




  week= new Date();
  /*tomorrow =  new Date(this.today.setDate(this.today.getDate() + 1));
  todaysDataTime = '';
  tomosDataTime = '';*/
  month = new Date().getMonth() +1;

  yesterday = new Date().getDate() - 6;

  today = new Date().getDate() -5;

  second = new Date().getDate() -4;

  third = new Date().getDate() -3;

  forth = new Date().getDate() -2;

  fifth = new Date().getDate() -1;

  sixth = new Date().getDate();


  constructor(private db: AngularFirestore, private authService: AuthService, private http: HttpClient, private afAuth: AngularFireAuth) {
    /*this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.tomosDataTime = formatDate(this.tomorrow, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');*/


  }

  ngOnInit(){
    //this.initialiseForm();
  }

submit(postData: {week: string; onet: string; twot: string; threet: string; fourt: string;  fivet: string; sixt: string;}){
  this.http.post("https://employee4-6f5cd.firebaseio.com/EmployeePersonalWork/WeekDeets.json", postData).subscribe(responseData => {
    console.log(responseData)
  })

  this.employeeWork.reset();

  }

  /*initialiseForm(){
      this.Timeline = new FormGroup({
      one : new FormControl(''),
      onet : new FormControl(''),
      two : new FormControl(''),
      twot : new FormControl(''),
      three : new FormControl(''),
      threet : new FormControl(''),
      four : new FormControl(''),
      fourt : new FormControl(''),
      five : new FormControl(''),
      fivet : new FormControl(''),
      six: new FormControl(''),
      sixt : new FormControl(''),
      seven : new FormControl(''),
      sevent : new FormControl('')
    })
}*/


  //const value = this.Timeline.value;
  //console.log(value);


  /*this.authService.currentUser.pipe(take(1)).subscribe((val) => {

  let id = val.uid;
  this.afd.list(`/TimeDetails/${id}`).push(value)
  console.log(id);

})


  this.Timeline.reset();

  }*/




}



