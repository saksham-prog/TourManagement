import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addplace',
  templateUrl: './addplace.component.html',
  styleUrls: ['./addplace.component.css']
})
export class AddplaceComponent implements OnInit {
  banner;
  sliderImages;
  placeName;
  desc;
  cityName;
  stateName;

  constructor(private ds:DataService) { }

  ngOnInit(): void {


  }

  getFile(e)
  {
this.banner= e.target.files[0];
  }

  getSlider(e)
  {
    this.sliderImages= e.target.files;
  }


  addPlace()
  {
  
        var formdata = new FormData();
        formdata.set('placeName', this.placeName);        
        formdata.set('cityName', this.cityName);
        formdata.set('stateName', this.stateName);
        formdata.set('desc', this.desc);
        formdata.set('banner', this.banner);
        for(var i =0; i<this.sliderImages.length; i++)
        {
          formdata.append('sliderImages', this.sliderImages[i], this.sliderImages[i]['name']);
        }
        this.ds.addPlace(formdata).subscribe((d)=>{
          alert(JSON.stringify(d));
        })

    }

}
