import { Component, OnInit, ViewChild, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AdminComponent } from '../admin/admin.component';

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
  emailPropsu;
  passwordPropsu;
  nameProptu;
  AdminIdProptu;
  passwordProptu;
  
  @ViewChild('signUPForm') signupelement;
  @ViewChild('loginForm')  loginelement;
  @ViewChild('mclose') closebtn;
  @ViewChild('choose') chooseelement;
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
        localStorage.setItem('role', response.data[0].role);
        
        
        this.closebtn.nativeElement.click();
         this.router.navigate(['/dashboard']);

      }
      else{
        alert("undefined arguments");
      }
    })

   
  }
  chooselogin(){
  this.chooseelement.nativeElement.click(); 
  this.signupelement.nativeElement.style.display="block"
  this.loginelement.nativeElement.style.display="block"
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
  this.ds.signUp({role:"user", name:this.nameProp, email:this.emailPropsu, password:this.passwordPropsu, mobile:this.mobileProp})
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

