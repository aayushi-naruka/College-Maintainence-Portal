import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{Router} from'@angular/router'
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm: FormGroup;
  constructor(  private router : Router , private authservice: AuthService ,private cookieservice : CookieService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    if(this.cookieservice.get('session')){
      this.router.navigate(['/dashboard'])
    }
  }

  onSubmit(data : any) {
      let obj  = {
        email : data.email ,
        password : data.password
      }

      
       this.authservice.login(obj).subscribe((res :any)=>{
        console.log(">>>",res);
       
       this.cookieservice.set('session', res['session-id']);
       this.router.navigate([''])
       });


  }

}
