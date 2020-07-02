import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookd;
  filteredformdata;
  
  loginEmail;
  form;
  searchdatet;
  constructor(private router: Router,private ds:DataService) { }
  ngOnInit(): void {
    alert("hello")
    console.log('loginemail')
    //   this.email=  localStorage.getItem('email');
    //   this.ds.fetchData({email:this.email}).subscribe((d)=>{
    //     alert('ok')
    //     this.filteredData= d.data;
    //   })
  
   
    //  this.ds.fetchData({email:this.email}).subscribe((d)=>{
    //    alert('ok')
    //    this.filteredData= d.data;
    //  })
   console.log("success")
    this.loginEmail=localStorage.getItem('loginEmail');
    this.ds.fetchData({loginEmail:this.loginEmail}).subscribe((d)=>{

       alert("returned data"+JSON.stringify(d))
      

    var alldata = d.data;
    console.log(alldata);
    
    this.filteredformdata=   alldata.filter((p)=>{
     
      // alert("--"+p.city+"-"+this.ct+"--")  
      return p.loginEmail == this.loginEmail;

      })

      alert("this is filtered"+JSON.stringify(this.filteredformdata))

    })






  }
// fetchData(){
//   alert("input value"  + this.bookd );
//   console.log("welcome")
//   localStorage.setItem('bookingdate', this.bookd);
     
// }
}
