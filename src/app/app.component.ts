import { Component } from '@angular/core';
import { PizzeriaService } from './services/pizzeria.service';
import { Pizzeria } from './models/pizzeria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzeria-project';
  pizzerias: Pizzeria[] = [];

  constructor(private srv: PizzeriaService){}

  ngOnInit(){
    this.srv.getPizzerias()
    .subscribe( data => { this.pizzerias = data} )
  }
}
