import { Component, OnInit } from '@angular/core';
import Foo from 'src/compnents/model/Foo';
import {FooService } from "../service/foo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}

  title = 'my-app';
  ngOnInit(): void {
  
  }
}
