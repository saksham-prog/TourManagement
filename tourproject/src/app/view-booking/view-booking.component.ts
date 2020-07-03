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
   this.ds.fetchDatas().subscribe((d)=>{
alert("returned data"+JSON.stringify(d))
      var alldata = d.data;
    console.log(alldata);
    
    this.filteredformdata=alldata;

   

    })






  }

}
