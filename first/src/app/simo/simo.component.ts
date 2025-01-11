import { Component } from '@angular/core';

@Component({
  selector: 'app-simo',
  standalone: true,
  imports: [],
  templateUrl: './simo.component.html',
  styleUrls: ['./simo.component.css'] // Correction : 'styleUrl' -> 'styleUrls'
})
export class SimoComponent {
  title = 'simo'; // Déclaration de la propriété title
}
