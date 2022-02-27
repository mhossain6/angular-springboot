import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authenticationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
   public   authenticationService: AuthenticationService){}

  title = 'my-app';
  ngOnInit(): void {
    if (this.authenticationService.currentUserValue.id != null) {
      this.router.navigate(['/catworld']);
    }else {
      this.router.navigate(['/login']);
    }
  }
}
