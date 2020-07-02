import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.css']
})
export class AddpackageComponent implements OnInit {
cityName;
packageName;
nights;
hotelsu;
hotels;
price;
constructor( private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

  packages()
  {

    alert({cityName:this.cityName, packageName:this.packageName, nights:this.nights, hotelsu:this.hotelsu, hotels:this.hotels, price:this.price})
    this.ds.packages({cityName:this.cityName, packageName:this.packageName, nights:this.nights, hotelsu:this.hotelsu, hotels:this.hotels, price:this.price})
             .subscribe((response)=>{
    console.log(response)
    alert(JSON.stringify(response))
    if(response.status=="ok")
    {
      alert('Your details are submitted');
      

      this.router.navigate(['/admin-dashboard']);
    }else{
      alert('wrong')
    }
    
  })
}
}

