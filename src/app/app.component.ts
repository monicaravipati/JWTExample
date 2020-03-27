import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './Shared/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jwt-app';

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { 
      this.form = this.fb.group({
        UserName: ['',Validators.required],
        Password: ['',Validators.required]
    });
    }

  login() {
    const val = this.form.value;

    if (val.UserName && val.Password) {
      this.authService.login(val.UserName, val.Password)
        .subscribe(
          () => {
            console.log("User is logged in");
            this.router.navigateByUrl('/');
          }
        );
    }

  }
}
