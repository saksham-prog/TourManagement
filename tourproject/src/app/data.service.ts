import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getMyCurrentLocation;
  getUsers;

  baseURL="http://localhost:3000/"
  constructor(private http:HttpClient) { }


  // getPosts():any
  // {

  //    return this.http.get('https://jsonplaceholder.typicode.com/posts');
     
  // }

  fetchPlaces():any
  {
    return this.http.get(this.baseURL+'getAllplaces')
  }
  fetchPackages():any
  {
    return this.http.get(this.baseURL+'getAllpackages')
  }

  fetchData(d):any
  {
    return this.http.post(this.baseURL+'getAlldata',d)
  }
  fetchDatas():any
  {
    return this.http.get(this.baseURL+'getAlldatas')
  }
  fetchplaces():any
  {
    return this.http.get(this.baseURL+'getplaces')
  }
  fetchpackages():any
  {
    return this.http.get(this.baseURL+'getpackages')
  }
  fetchuser():any
  {
    return this.http.get(this.baseURL+'getuser')
  }
  fetchenquiry():any
  {
    return this.http.get(this.baseURL+'getenquiry')
  }
  signUp(d):any
  {
    return this.http.post(this.baseURL+'sign-up', d);
  }


  signIn(d):any
  {
    return this.http.post(this.baseURL+'sign-in', d);
  }
  
  submit(d):any
  {
    return this.http.post(this.baseURL+'submit', d);
  }
  add(d):any
  {
    return this.http.post(this.baseURL+'add', d);
  }
  packages(d):any
  {
    return this.http.post(this.baseURL+'packages', d);
  }
  addPlace(d):any
  {
    return this.http.post(this.baseURL+'addPlace', d);
  }


}
