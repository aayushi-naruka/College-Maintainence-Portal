import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router : Router, private authservice: AuthService, private cookieservice : CookieService ){}

  logoutHandler(){
    this.authservice.logout().subscribe((res:any)=>{
      if(res.status){
        this.cookieservice.deleteAll()
        this.router.navigate(['login'])

      }
    })
    
  }


}
