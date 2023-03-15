import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { StudentFeeComponent } from './student-fee/student-fee.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"",component:HomeComponent},
{path:"contact",component:ContactUsComponent},
{path:"marks",component:StudentMarksComponent},
{path:"fee",component:StudentFeeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
