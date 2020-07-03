import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {
  filteredenquiry;
  constructor(private router: Router,private ds:DataService) { }

  ngOnInit(): void {
    
    this.ds.fetchenquiry().subscribe((d)=>{
      alert("returned data"+JSON.stringify(d))
            var alldata = d.data;
          console.log(alldata);
          
          this.filteredenquiry=alldata;
      
         
      
          })
      
  }

}

