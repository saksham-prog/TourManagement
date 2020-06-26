import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashbody',
  templateUrl: './dashbody.component.html',
  styleUrls: ['./dashbody.component.css']
})
export class DashbodyComponent implements OnInit {

  ct;
  filteredPlaces;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  fetchPlaces()
  {
    alert("input value"+this.ct);
      this.ds.fetchPlaces().subscribe((d)=>{

        alert("returned data"+JSON.stringify(d))
        

      var allplaces = d.data;
      console.log(allplaces);
      this.filteredPlaces=   allplaces.filter((p)=>{
        alert("--"+p.city+"-"+this.ct+"--")  
        return p.city == this.ct;

        })

        alert("this is filtered"+JSON.stringify(this.filteredPlaces))

      })

     
      

  }
}
