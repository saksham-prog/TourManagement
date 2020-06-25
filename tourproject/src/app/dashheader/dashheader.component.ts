import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


declare var openNav;
declare var closeNav;

@Component({
  selector: 'app-dashheader',
  templateUrl: './dashheader.component.html',
  styleUrls: ['./dashheader.component.css']
})
export class dashheaderComponent implements OnInit {

  CallopenNav()
  {
    openNav();
  }

  CallcloseNav()
  {
    closeNav();
  }

  constructor(private router: Router) { }
  @Input() name;
  

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem("email");
    localStorage.removeItem('name')
    this.router.navigate(['/']);
  }



}
