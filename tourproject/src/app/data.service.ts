import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getMyCurrentLocation;
  getUsers;

  constructor(private http:HttpClient) { }


  getPosts():any
  {

     return this.http.get('https://jsonplaceholder.typicode.com/posts');
     
  }

  fetchPlaces():any
  {
    return this.http.get('http://localhost:3000/getAllplaces')
  }
  fetchPackages():any
  {
    return this.http.get('http://localhost:3000/getAllpackages')
  }

  fetchData(d):any
  {
    return this.http.post('http://localhost:3000/getAlldata',d)
  }


  signUp(d):any
  {
    return this.http.post('http://localhost:3000/sign-up', d);
  }


  signIn(d):any
  {
    return this.http.post('http://localhost:3000/sign-in', d);
  }
  
  submit(d):any
  {
    return this.http.post('http://localhost:3000/submit', d);
  }
  add(d):any
  {
    return this.http.post('http://localhost:3000/add', d);
  }
  packages(d):any
  {
    return this.http.post('http://localhost:3000/packages', d);
  }
  addPlace(d):any
  {
    return this.http.post('http://localhost:3000/addPlace', d);
  }


}
