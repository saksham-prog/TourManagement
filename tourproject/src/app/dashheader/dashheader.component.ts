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
    localStorage.setItem('searchCity', this.ct);
     this.router.navigate(['/dashboard/search']) ;
     
      

  }

}
