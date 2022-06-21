import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gss-signup',
  templateUrl: './gss-signup.component.html',
  styleUrls: ['./gss-signup.component.scss']
})
export class GSSSignUpComponent implements OnInit {

  @Output()
  callToActionText: String = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.callToActionText = "查看隊伍列表";
  }

  openForm() {
    this.router.navigateByUrl('/2022/gss/record');
  }
}
