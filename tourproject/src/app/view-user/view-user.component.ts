import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
filtereduser;
  constructor(private router: Router,private ds:DataService) { }

  ngOnInit(): void {
    
    this.ds.fetchuser().subscribe((d)=>{
      alert("returned data"+JSON.stringify(d))
            var alldata = d.data;
          console.log(alldata);
          
          this.filtereduser=alldata;
      
         
      
          })
      
  }

}
