import { Component, OnInit } from '@angular/core';
import { InitComponent } from '../init.component';

@Component({
  selector: 'sat-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registra() {
    // alert('En obras');
    InitComponent.gotoLogin();
  }

}
