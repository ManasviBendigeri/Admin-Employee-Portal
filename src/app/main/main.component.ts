import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';


import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  employeeArray:any =[];
  currentUser: Observable<firebase.User>;
  id: string;
  email: string;

  userId: string;

  OptionMode: FormGroup;

  constructor(private afd: AngularFireDatabase, private authService: AuthService) {

   }

  ngOnInit(): void {

    this.initialiseForm();

    /*this.afd.list('/employees').valueChanges().subscribe(employeeArray =>{
      this.employeeArray = Object.values(employeeArray);
      console.log(this.employeeArray);
    })*/

    this.authService.currentUser.pipe(take(1)).subscribe((val) => {
      this.id = val.uid;
      this.email = val.email;
      console.log(this.id);
      console.log(this.email);
      return val.uid

    })


  }

  initialiseForm(){
    this.OptionMode = new FormGroup({
      option : new FormControl(''),
      date : new FormControl('')
    })
  }

  workMode(){
    const value = this.OptionMode.value;
    console.log(value);



    this.authService.currentUser.pipe(take(1)).subscribe((val) => {
    let id = val.uid;
    this.afd.list(`/workModel/${id}`).push(value)
    console.log(id);

  })


  }

}
