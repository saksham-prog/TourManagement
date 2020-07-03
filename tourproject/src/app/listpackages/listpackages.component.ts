import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-listpackages',
  templateUrl: './listpackages.component.html',
  styleUrls: ['./listpackages.component.css']
})
export class ListpackagesComponent implements OnInit {
  bookd;
  filteredpackages;
  
 loginEmail;
  form;
  searchdatet;
  constructor(private router: Router,private ds:DataService) { }

  ngOnInit(): void {
    
    this.ds.fetchpackages().subscribe((d)=>{
      alert("returned data"+JSON.stringify(d))
            var alldata = d.data;
          console.log(alldata);
          
          this.filteredpackages=alldata;
      
         
      
          })
      
  }

}
