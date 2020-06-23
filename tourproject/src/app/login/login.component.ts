import { Component, OnInit, ViewChild, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailProp;
  passwordProp;
  nameProp;
  mobileProp;
  // emailPropsu;
  // passwordPropsu;
  
  @ViewChild('signUPForm') signupelement;
  @ViewChild('loginForm')  loginelement;
  constructor( private router:Router, private ds:DataService ) { }

  ngOnInit(): void {

    if(localStorage.getItem('email'))
      this.router.navigate(['/dashboard']);
  }

  login()
  {
      
    this.ds.signIn({ email:this.emailProp, password:this.passwordProp})
    .subscribe((response)=>{
      alert("hello");
      alert(JSON.stringify(response));
      if(response.status=="ok")
      {
         
        localStorage.setItem('name', response.data[0].name);          
        localStorage.setItem('email', response.data[0].email);
        this.router.navigate(['/dashboard']);

      }
      else{
        alert("undefined arguments");
      }
    })

   
  }

  showLogin()
  {
      this.loginelement.nativeElement.style.display="block"
      
      this.signupelement.nativeElement.style.display="none"
  }
  showSignup()
  {
    console.log(this.signupelement);
    console.log(this.loginelement);
    this.signupelement.nativeElement.style.display="block";

    this.loginelement.nativeElement.style.display="none"
      
    
  }
  
 SignUp()
 {
  this.ds.signUp({name:this.nameProp, email:this.emailProp, password:this.passwordProp, mobile:this.mobileProp})
  .subscribe((response)=>{
    if(response.status=="ok")
    {
      
   

      alert('registration successfull you will be redirected to login');
      this.router.navigate(['/login']);


    }
    else
    {
      alert("email id already in use registered by different email id");
    }
  })
}


}

  
  