import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizzeria } from '../models/pizzeria';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PizzeriaService {

  constructor(private http: HttpClient) { }

  getPizzerias(): Observable<Pizzeria[]>{
    return this.http.get<Pizzeria[]>("http://localhost:3000/pizzeria/");
  }
}
