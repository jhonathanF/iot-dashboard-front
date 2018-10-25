import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getDistance() {
    return this.http.get('http://localhost:3000/distance');
  }

}