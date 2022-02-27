import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authenticationService';

@Component({
  selector: 'my-app-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.sass']
})
export class UnauthorisedComponent implements OnInit {

  constructor( private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.logout();
    console.log("logout screen");
    if (this.authenticationService.currentUserValue.id != null) {
      this.router.navigate(['/catworld']);
    }else {
      this.router.navigate(['/login']);
    }
  }

}
