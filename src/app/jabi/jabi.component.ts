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
  isModalOpen: boolean = false;

  constructor() {}

  checkAnswer() {
    const correctAnswer = (document.getElementById('correctAnswer') as HTMLInputElement).value.trim().toLowerCase();
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

  openModal() {
    this.isModalOpen = true;
    console.log(this.isModalOpen)
  }


  closeModal() {
    this.isModalOpen = false;
  }
}
