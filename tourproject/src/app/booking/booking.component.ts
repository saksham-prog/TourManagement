import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  name;
  filteredData;
  

  constructor(private router: Router,private ds:DataService) { }
  ngOnInit(): void {
    
  }

  fetchData()
  {
    alert("input value"+ this.name);
    localStorage.setItem('searchCity', this.name);
     this.router.navigate(['/search2']) ;
     
      

  }
}
