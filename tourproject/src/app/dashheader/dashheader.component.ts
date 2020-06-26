import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
 

declare var openNav;
declare var closeNav;

@Component({
  selector: 'app-dashheader',
  templateUrl: './dashheader.component.html',
  styleUrls: ['./dashheader.component.css']
})
export class dashheaderComponent implements OnInit {
  ct;
  filteredPlaces;
  CallopenNav()
  {
    openNav();
  }

  CallcloseNav()
  {
    closeNav();
  }

  constructor(private router: Router,private ds:DataService) { }
  @Input() name;
  

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem("email");
    localStorage.removeItem('name')
    this.router.navigate(['/']);
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
