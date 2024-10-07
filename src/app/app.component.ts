import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";
import {MatGridListModule} from '@angular/material/grid-list';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    MatGridListModule
      ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  isOriginalCursor = true;
  title = 'Thomas Bureller';

   // Utilisation d'un tableau pour garder une trace de l'état des fantômes
   ghosts: { id: string; exploded: boolean }[];

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['fr', 'en']);
    this.translateService.setDefaultLang(localStorage.getItem('lang') || 'fr');
    this.translateService.use('fr');
    this.ghosts = [
      { id: 'aGhost', exploded: false },
      { id: 'bGhost', exploded: false },
      { id: 'cGhost', exploded: false },
      { id: 'dGhost', exploded: false },
      { id: 'eGhost', exploded: false },
    ];

  }

    // Event Listener pour le mousedown (quand on clique)
    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent) {
      const divElement = document.querySelector('.relative') as HTMLElement;
      // Change le curseur pendant le clic
      divElement.style.cursor = "url('/assets/images/cursor/pacmanCursorClick.png'), auto";
    }

    // Event Listener pour le mouseup (quand on relâche le clic)
    @HostListener('mouseup', ['$event'])
    onMouseUp(event: MouseEvent) {
      const divElement = document.querySelector('.relative') as HTMLElement;
      // Remet le curseur à son état initial après le clic
      divElement.style.cursor = "url('/assets/images/cursor/pacmanCursor.png'), auto";
    }
// Méthode qui applique l'explosion à la div cliquée
explodeGhost(event: MouseEvent) {
  const ghostElement = event.currentTarget as HTMLElement;

  // Vérifie si l'élément a déjà explosé
  const ghostId = ghostElement.classList[1]; // Récupère l'ID du fantôme
  const ghost = this.ghosts.find(ghost => ghost.id === ghostId);

  if (ghost && !ghost.exploded) {
    ghostElement.classList.add('explode');
    ghost.exploded = true;
    setTimeout(() => {
      ghostElement.remove();
    }, 200);
  }
}

handleGhostClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const ghostElement = target.closest('.ghost');
  if (ghostElement) {
    this.explodeGhost({ currentTarget: ghostElement } as unknown as MouseEvent);
  }

}
  }




