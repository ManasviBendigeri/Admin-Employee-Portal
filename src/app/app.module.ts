import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { LeavesComponent } from './leaves/leaves.component';
import { TokensComponent } from './tokens/tokens.component';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';
import { TestComponent } from './test/test.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ReimbursementComponent,
    LeavesComponent,
    TokensComponent,
    SalarySlipComponent,
    TestComponent,
    TimelineComponent,
    SearchComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    AdminViewComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,


    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,

    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB1CH4tZsw3AluVQlPLkBK0ekBjTTuw43I",
      authDomain: "employee4-6f5cd.firebaseapp.com",
      databaseURL: "https://employee4-6f5cd.firebaseio.com",
      projectId: "employee4-6f5cd",
      storageBucket: "employee4-6f5cd.appspot.com",
      messagingSenderId: "629926120376",
      appId: "1:629926120376:web:d2534c203e9c43ce44dd4d"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
