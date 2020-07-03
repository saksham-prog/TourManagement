import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-listplaces',
  templateUrl: './listplaces.component.html',
  styleUrls: ['./listplaces.component.css']
})
export class ListplacesComponent implements OnInit {
  bookd;
  filteredplaces;
  
 loginEmail;
  form;
  searchdatet;
  constructor(private router: Router,private ds:DataService) { }

  ngOnInit():void {
    
    this.ds.fetchplaces().subscribe((d)=>{
      alert("returned data"+JSON.stringify(d))
            var alldata = d.data;
          console.log(alldata);
          
          this.filteredplaces=alldata;
      
         
      
          })
      
  }

}
