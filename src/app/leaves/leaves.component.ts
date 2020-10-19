import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { take } from 'rxjs/operators';


interface Reason {
  value: string;
  viewValue: string;
};


@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {

  alert: boolean = false;

  Employeeleaves: FormGroup;

  selectedValue: string;
  reasons: Reason[] = [
    {value: 'medical-0',viewValue:'Medical'},
    {value: 'travel-1',viewValue:'Travel'},
    {value: 'Others-2',viewValue:'Others'}
  ]

  constructor(private afd : AngularFireDatabase, private authService: AuthService) { }

  ngOnInit(): void {

    this.initialiseForm();
  }

  initialiseForm(){
    this.Employeeleaves = new FormGroup({
      id : new FormControl(''),
      name : new FormControl(''),
      contact : new FormControl(''),
      from : new FormControl(''),
      to : new FormControl(''),
      reason: new FormControl('')
    })
  }

  applyForLeave(){
    const value = this.Employeeleaves.value;
    console.log(value);
    //this.afd.list('/leaveDetails').push(value)
    //this.afd.list('/leaveDetails/${id}').push(value)


    this.authService.currentUser.pipe(take(1)).subscribe((val) => {
    //const value = this.Employeeleaves.value;
    let id = val.uid;
    this.afd.list(`/leaveDetails/${id}`).push(value)
    console.log(id);
    //this.afd.list('/leaveDetails').push(id);

    //return val.uid
  })

    this.alert=true;

    this.Employeeleaves.reset();

    }







  closeAlert(){
    this.alert = false;
  }

  /*getId(){
    this.authService.currentUser.pipe(take(1)).subscribe((val) => {
    let id = val.uid;
    console.log(id);
    this.afd.list('/leaveDetails'+ id).push(id);
    //return val.uid
  })*/

}





