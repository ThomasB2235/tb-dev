import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-jabi',
  standalone: true,
  imports: [NgIf, FormsModule, FooterComponent],
  templateUrl: './jabi.component.html',
  styleUrl: './jabi.component.scss'
})
export class JabiComponent {

  userAnswer: string = '';
  lockedScreen = true;
  messageErreur = false;
  fileUrl = 'assets/CVThomasBureller.pdf';

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

  downloadCV() {
    const link = document.createElement('a');
    link.href = this.fileUrl;
    link.download = 'CVThomasBureller.pdf';
    link.click();
    }
}
