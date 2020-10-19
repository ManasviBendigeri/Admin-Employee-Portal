import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { LeavesComponent } from './leaves/leaves.component';
import { TokensComponent } from './tokens/tokens.component';
import { TestComponent } from './test/test.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchComponent } from './search/search.component';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'reimbursement', component: ReimbursementComponent},
  {path: 'leaves', component: LeavesComponent},
  {path: 'tokens', component: TokensComponent},
  {path: 'test', component: TestComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'search', component: SearchComponent},
  {path: 'salaryslip', component: SalarySlipComponent},
  {path: 'home', component: HomeComponent},
  {path: 'employeeadd', component: EmployeeAddComponent},
  {path: 'employeelist', component: EmployeeListComponent},
  {path: 'adminview', component: AdminViewComponent}


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    AngularFireModule
  ]
})
export class AppRoutingModule { }
