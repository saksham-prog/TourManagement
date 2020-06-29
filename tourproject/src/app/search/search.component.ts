import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  seachCity;
  filteredPlaces;
  
  constructor(private ds:DataService) { }

  ngOnInit(): void {

    this.seachCity=localStorage.getItem('searchCity');
    this.ds.fetchPlaces().subscribe((d)=>{

      // alert("returned data"+JSON.stringify(d))
      

    var allplaces = d.data;
    console.log(allplaces);
    
    this.filteredPlaces=   allplaces.filter((p)=>{
     
      // alert("--"+p.city+"-"+this.ct+"--")  
      return p.city == this.seachCity;

      })

      alert("this is filtered"+JSON.stringify(this.filteredPlaces))

    })

  }

}
