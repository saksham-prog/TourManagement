import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  bookd;
  filteredformdata;
  
  loginEmail;
  form;
  searchdatet;
  constructor(private router: Router,private ds:DataService) { }
  ngOnInit(): void {
    alert("hello")
    console.log('loginemail')
   
   console.log("success")
     this.loginEmail=localStorage.getItem('email');
    alert(this.loginEmail);
    this.ds.fetchDatas({}).subscribe((d)=>{

       alert("returned data"+JSON.stringify(d))
      

    var alldata = d.data;
    console.log(alldata);
    
    this.filteredformdata=   alldata.filter((p)=>{
     
       
      return p.loginEmail == this.loginEmail;

      })

      alert("this is filtered"+JSON.stringify(this.filteredformdata))

    })






  }

}
