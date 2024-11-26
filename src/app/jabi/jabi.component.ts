import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jabi',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './jabi.component.html',
  styleUrl: './jabi.component.scss'
})
export class JabiComponent {
  userAnswer: string = '';
  lockedScreen = true;
  messageErreur = false;
  constructor() {}

  checkAnswer() {
    // Récupère la réponse correcte depuis la div cachée
    const correctAnswer = (document.getElementById('correctAnswer') as HTMLInputElement).value.trim().toLowerCase();
    // Compare la réponse de l'utilisateur avec la réponse correcte
    if (this.userAnswer.trim().toLowerCase() === correctAnswer) {
      this.lockedScreen = false;
      this.messageErreur = false;
    } else {
      this.lockedScreen = true;
      this.messageErreur = true;
    }
  }
}
