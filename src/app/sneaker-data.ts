import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sneaker } from './sneaker-list/sneaker';


const API_URL = 'https://6a15e5a891ff9a63de08f570.mockapi.io/Sneakers';

@Injectable({
  providedIn: 'root',
})
export class SneakerData {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(API_URL);
  }

  public getById(id: number): Observable<Sneaker> {
    return this.http.get<Sneaker>(`${API_URL}/${id}`);
  }

  addSneaker(sneaker: Sneaker) {
    return this.http.post<Sneaker>(API_URL, sneaker);
  }
}
