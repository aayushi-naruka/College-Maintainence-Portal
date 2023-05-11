import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{Router} from'@angular/router'
import { passwordValidator } from '../password.validator';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor(  private router : Router , private http: HttpClient, private authService : AuthService) {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('',[Validators.required]),
      role : new FormControl('',[Validators.required])
    },{validators:passwordValidator()});
  }

  onSubmit(data : any) {
      let obj  = {
        email : data.email ,
        password : data.password,
        role: data.role
      }

     this.authService.signup(obj).subscribe(res=>{
       console.log(">>>>>",res);
       this.router.navigate(['dashboard'])
       });


  }
}
