import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  OptionMode: FormGroup;

  body:string;

  constructor(private afd : AngularFireDatabase, private authService: AuthService) { }

  ngOnInit(): void {
    this.initialiseForm();
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
