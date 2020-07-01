import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchCityName;
  filteredformdata;
  filteredpackages;
  constructor(private ds:DataService) { }

  ngOnInit(): void {

    this.searchCityName=localStorage.getItem('searchCity');
    this.ds.fetchPlaces().subscribe((d)=>{

       alert("returned data"+JSON.stringify(d))
      

    var allplaceName = d.data;
    console.log(allplaceName);
    
    this.filteredformdata=   allplaceName.filter((p)=>{
     
      // alert("--"+p.city+"-"+this.ct+"--")  
      return p.cityName == this.searchCityName;

      })

      alert("this is filtered"+JSON.stringify(this.filteredformdata))

    })


    this.searchCityName=localStorage.getItem('searchCity');
    this.ds.fetchPackages().subscribe((d)=>{

       alert("returned data"+JSON.stringify(d))
      

    var allplaceName = d.data;
    console.log(allplaceName);
    
    this.filteredpackages=   allplaceName.filter((p)=>{
     
      // alert("--"+p.city+"-"+this.ct+"--")  
      return p.cityName == this.searchCityName;

      })

      alert("this is filtered"+JSON.stringify(this.filteredpackages))

    })








  }

}
