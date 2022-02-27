import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { first } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/service/authenticationService';
 
@Component({
  selector: 'my-app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css'],
})
export class LogonComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  loading = false;
  submitted = false;
  returnUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {

  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
        //redirect to home if already logged in
        console.log("login screen");
        if (this.authenticationService.currentUserValue.id != null) {
          this.router.navigate(['/catworld']);
        }else {
          this.router.navigate(['/login']);
        }

  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    
    console.log("logging in");

    this.authenticationService
      .login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/catworld']);
        },
        (error) => {
          this.loading = false;
        }
      );
     
  }
}

export default LogonComponent;
