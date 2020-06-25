import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailProp;
  messageProp;
  nameProp;
  constructor( private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

submit()
  {this.ds.submit({name:this.nameProp, email:this.emailProp, message:this.messageProp})
  .subscribe((response)=>{
    if(response.status=="ok")
    {
      
   

      alert('Your enquiries are submitted');
      alert('we will contact you in 24 hours');
      this.router.navigate(['/']);


    }
    
  })
}
}
