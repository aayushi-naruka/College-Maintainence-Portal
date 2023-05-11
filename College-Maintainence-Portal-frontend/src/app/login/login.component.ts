import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{Router} from'@angular/router'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(  private router : Router , private authservice: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(data : any) {
      let obj  = {
        email : data.email ,
        password : data.password
      }

      sessionStorage.setItem('email', data.email);
       this.authservice.login(obj).subscribe(res=>{
        console.log(">>>",res);
       this.router.navigate(['dashboard'])
       });


  }

}
