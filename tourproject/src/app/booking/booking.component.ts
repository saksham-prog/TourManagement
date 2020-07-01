import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  
  filteredData;
  email;
  

  constructor(private router: Router,private ds:DataService) { }
  ngOnInit(): void {
    alert("hello")
    if(!(localStorage.getItem('role')=="admin")){
      this.email=  localStorage.getItem('email');
      this.ds.fetchData({email:this.email}).subscribe((d)=>{
        alert('ok')
        this.filteredData= d.data;
      })
    }
   
    //  this.ds.fetchData({email:this.email}).subscribe((d)=>{
    //    alert('ok')
    //    this.filteredData= d.data;
    //  })
  }

}
