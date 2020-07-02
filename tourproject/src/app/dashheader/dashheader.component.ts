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
  ctName;
  filteredPlaceName;
  
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
    alert("input value"     + this.ctName);
    localStorage.setItem('searchCity', this.ctName);
     this.router.navigate(['/search']) ;
     
      

  }
  // fetchPackages()
  // {
  //   alert("input value"+ this.ctName);
  //   localStorage.setItem('searchCity', this.ctName);
  //    this.router.navigate(['/search']) ;
     
      

  // }

}
