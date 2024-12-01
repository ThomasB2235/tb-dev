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
  isModal1Open: boolean = false;
  isModal2Open: boolean = false;
  currentSlide: number = 0;

  paharmacyText = "En tant que préparateur en pharmacie pendant 4 ans, j'ai eu l'opportunité de travailler au quotidien avec des personnes âgées, en leur fournissant des médicaments et des conseils adaptés à leurs besoins spécifiques. Ce rôle m’a non seulement permis de développer une connaissance approfondie des traitements et de la gestion de la santé des seniors, mais aussi de comprendre les besoins spécifiques liés à l’utilisation des logiciels de santé. J’ai appris à gérer des informations sensibles dans des outils tels que les logiciels de dossiers médicaux partagés (DMP) ou de gestion des soins. Cette expérience m’a sensibilisé aux attentes des soignants et des patients face à ces technologies, et m’a appris à être attentif aux détails, tout en interagissant de manière claire et empathique avec des patients souvent vulnérables.              Ces compétences se traduisent parfaitement dans le développement de solutions logicielles, notamment en concevant des outils intuitifs, accessibles, et adaptés aux besoins d’utilisateurs parfois peu à l’aise avec la technologie, tout en respectant les exigences de sécurité et de confidentialité propres au domaine de la santé.              Chez JABI, je suis convaincu que mes expériences passées me permettront d'apporter une approche humaine et pragmatique à la création de solutions numériques, tout en ayant à cœur de contribuer à l\'amélioration des conditions de vie des seniors grâce à des outils technologiques adaptés."
  podoText = "Pendant 6 ans, j’ai eu la chance de travailler en tant que podologue, principalement auprès de personnes âgées en maison de retraite (EHPAD, résidence senior, service spécialisé). Ce rôle m’a permis de nouer des relations solides et humaines avec les infirmières, les médecins, et bien sûr, les résidents eux-mêmes. Chaque jour, je collaborais avec les équipes soignantes pour apporter des soins adaptés et prendre soin des pieds de ceux qui en avaient le plus besoin. J’ai appris à écouter les patients, à comprendre leurs préoccupations et à travailler en étroite collaboration avec les autres soignants pour garantir leur bien-être. Cette expérience m’a profondément marqué, et elle m’a donné une vision plus complète du monde des maisons de retraite, un univers où la technologie, l’empathie et les soins doivent se compléter. Aujourd’hui, dans mon rôle de développeur chez JABI, je souhaite apporter cette approche humaine à la création de solutions qui répondent aux besoins des soignants et des résidents.";

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

  openModal(n: number) {
     switch (n) {
      case 1:
        this.isModalOpen = true;
        break;
      case 2:
        this.isModal1Open = true;
        break;
      case 3:
        this.isModal2Open = true;
        break;
     }
  }

  closeModal(n: number) {
    switch (n) {
      case 1:
        this.isModalOpen = false;
        break;
      case 2:
        this.isModal1Open = false;
        break;
      case 3:
        this.isModal2Open = false;
        break;
     };
  }

  goToSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
  }
}
