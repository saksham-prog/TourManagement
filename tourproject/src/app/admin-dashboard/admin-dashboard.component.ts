import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
alldata;
filteredData;
  // name;
  // email;
  constructor( private router: Router,private ds:DataService ) { }

  ngOnInit(): void {

    // this.email=localStorage.getItem('email')
    // // this.route.queryParamMap.subscribe((d)=>{
    // //     this.name = d.get('name');
    // // })
    // this.name=localStorage.getItem('name');
                                // this.ds.fetchData().subscribe((d)=>{

      // alert("returned data"+JSON.stringify(d))
      

                             // var alldata = d.data;
                             // console.log(alldata);
    
                              // this.filteredData=   alldata.filter((p)=>{
     
                                       //   // alert("--"+p.city+"-"+this.ct+"--")  
                                         //   return p.data == this.alldata;

                                          //   })

                                        //   alert("this is filtered"+JSON.stringify(this.filteredData))

                                          // })

    
  }
  logout()
  {
    localStorage.removeItem("email");
    localStorage.removeItem('name')
    this.router.navigate(['/']);
  }
  
}