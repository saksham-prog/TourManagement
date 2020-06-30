import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class dashboardComponent implements OnInit {

  name;
  email;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.email=localStorage.getItem('email')
    // this.route.queryParamMap.subscribe((d)=>{
    //     this.name = d.get('name');
    // })
    this.name=localStorage.getItem('name');
  }

}
