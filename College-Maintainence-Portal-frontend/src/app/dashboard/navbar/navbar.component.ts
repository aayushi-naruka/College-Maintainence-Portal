import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  disableDashboard=true
  constructor(private router : Router, private authservice: AuthService, private cookieservice : CookieService ){}

async ngOnInit() {
  await this.authservice.getUserDetail().subscribe((response:any)=>{
    console.log("hehehe",response)
    this.authservice.addUserData(response)
    if(response.role==="Maintainence"){
      this.disableDashboard=false

      this.router.navigate(['all'])
      
    }
  })
}

  logoutHandler(){
    this.authservice.logout().subscribe((res:any)=>{
      if(res.status){
        this.cookieservice.deleteAll()
        this.authservice.emptyUserData()
        this.router.navigate(['login'])

      }
    })
    
  }


}
