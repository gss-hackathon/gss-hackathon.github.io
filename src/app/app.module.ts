import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CompetitionMethodComponent } from './competition-method/competition-method.component';
import { FooterComponent } from './footer/footer.component';
import { GSSSignUpComponent } from './gss/signup/gss-signup.component';
import { SchoolSignUpComponent } from './school/signup/school-signup.component';
import { SchoolSignupRecordComponent } from './school/signup-record/school-signup-record.component';
import { GssSignupRecordComponent } from './gss/signup-record/gss-signup-record.component';
import { SchoolAwardComponent } from './school/award/school-award.component';
import { GssAwardComponent } from './gss/award/gss-award.component';
import { School2023SignUpComponent } from './2023-school/signup/school-signup.component';
import { School2023SignupRecordComponent } from './2023-school/signup-record/school-signup-record.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolSignUpComponent,
    GSSSignUpComponent,
    CompetitionMethodComponent,
    FooterComponent,
    SchoolSignupRecordComponent,
    GssSignupRecordComponent,
    SchoolAwardComponent,
    GssAwardComponent,
    School2023SignUpComponent,
    School2023SignupRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
