import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimoComponent } from './simo/simo.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SimoComponent,FormsModule,NgIf,NgFor,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 hero={
  name:"",
  power:"",
  url:""
 }
 heros: any[]=[]
 ajoute(){
  this.heros.push(this.hero)
  this.hero={
    name:"",
    power:"",
    url:""
   }
 }

}
