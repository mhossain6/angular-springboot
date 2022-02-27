import { Component, OnInit } from '@angular/core';
import { Foo } from "../../models/Foo";
import {FooService } from "../../service/foo.service";

@Component({
  selector: 'my-app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.sass'],
})
export class FooComponent implements OnInit {

  foos : Foo[] =[] ;

  constructor(private fooservice: FooService) {
  }

  ngOnInit(): void {
    this.fooservice.getFoos().subscribe( ( foos) => { 
      this.foos = foos;
    });
  }
}
