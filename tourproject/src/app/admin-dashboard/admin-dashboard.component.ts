import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  // name;
  // email;
  constructor( private router: Router ) { }

  ngOnInit(): void {

    // this.email=localStorage.getItem('email')
    // // this.route.queryParamMap.subscribe((d)=>{
    // //     this.name = d.get('name');
    // // })
    // this.name=localStorage.getItem('name');
  }
  logout()
  {
    localStorage.removeItem("email");
    localStorage.removeItem('name')
    this.router.navigate(['/']);
  }
}