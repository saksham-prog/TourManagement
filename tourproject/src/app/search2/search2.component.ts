import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class Search2Component implements OnInit {
searchName;
filteredData;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    
    this.searchName=localStorage.getItem('searchName');
    // this.ds.fetchData().subscribe((d)=>{

    //   // alert("returned data"+JSON.stringify(d))
      

    // var alldata = d.data;
    // console.log(alldata);
    
    // this.filteredData=   alldata.filter((p)=>{
     
    //   // alert("--"+p.city+"-"+this.ct+"--")  
    //   return p.name == this.searchName;

    //   })

    //   alert("this is filtered"+JSON.stringify(this.filteredData))

    // })

  }

}
