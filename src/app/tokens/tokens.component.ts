import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  alert: boolean = false;

  Register: FormGroup;


  constructor(private afd: AngularFireDatabase, private authService: AuthService) { }

  ngOnInit(): void {

    this.initialiseForm();
  };

  initialiseForm(){
    this.Register = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      complaint: new FormControl('',Validators.required)

    })
  }

  register(){
    const value = this.Register.value;
    console.log(value);
    //this.afd.list('tokenRegister').push(value);

    this.authService.currentUser.pipe(take(1)).subscribe((val) => {
      //const value = this.Employeeleaves.value;
      let id = val.uid;
      console.log(id);
      //this.afd.list('/tokenRegister').push(id);

      this.afd.list(`/tokenDetails/${id}`).push(value)
      //console.log(id);
  })

  this.Register.reset();

  this.alert=true;





  }


  closeAlert(){
    this.alert = false;
  }
}

