import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-listplaces',
  templateUrl: './listplaces.component.html',
  styleUrls: ['./listplaces.component.css']
})
export class ListplacesComponent implements OnInit {

  constructor(private router: Router,private ds:DataService) { }

  ngOnInit():void {
    

  }

}
