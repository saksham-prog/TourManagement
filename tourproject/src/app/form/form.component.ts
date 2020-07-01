import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  placeProp;
  stateProp;
  adultProp;
  childProp;
  emailProp;
  messageProp;
  nameProp;
  mobileProp;
  amountProp;
  dateProp;
  datePropsu;
  constructor( private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

add()
  {this.ds.add({name:this.nameProp,mobile:this.mobileProp, loginEmail:localStorage.getItem('email'), email:this.emailProp, message:this.messageProp, place:this.placeProp, state:this.stateProp, adult:this.adultProp, child:this.childProp, amount:this.amountProp, date:this.dateProp, datesu:this.datePropsu})
  .subscribe((response)=>{
    if(response.status=="ok")
    {
      alert('Your details are submitted');
      alert('We will contact you in 24 hours');
<<<<<<< HEAD
      this.router.navigate(['/dashboard']);


=======
      this.router.navigate(['/']);
>>>>>>> fb72418eedde5e81d6cfb41dc91c45a2b65d2571
    }
    
  })
}
}
