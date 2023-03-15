import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
