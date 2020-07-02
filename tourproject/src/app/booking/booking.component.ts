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
  email;
  form;
  searchdatet;
  constructor(private router: Router,private ds:DataService) { }
  ngOnInit(): void {
    // alert("hello")
    // if(!(localStorage.getItem('role')=="admin")){
    //   this.email=  localStorage.getItem('email');
    //   this.ds.fetchData({email:this.email}).subscribe((d)=>{
    //     alert('ok')
    //     this.filteredData= d.data;
    //   })
  // }
   
    //  this.ds.fetchData({email:this.email}).subscribe((d)=>{
    //    alert('ok')
    //    this.filteredData= d.data;
    //  })
   
    this.searchdatet=localStorage.getItem('searchDate');
    this.ds.fetchData().subscribe((d)=>{

       alert("returned data"+JSON.stringify(d))
      

    var alldata = d.data;
    console.log(alldata);
    
    this.filteredformdata=   alldata.filter((p)=>{
     
      // alert("--"+p.city+"-"+this.ct+"--")  
      return p.datet == this.searchdatet;

      })

      alert("this is filtered"+JSON.stringify(this.filteredformdata))

    })






  }
fetchData(){
  alert("input value"  + this.bookd );
    localStorage.setItem('bookingdate', this.bookd);
     
}
}
