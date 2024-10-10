import { Component, HostListener, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogDataComponent } from '../dialog-data/dialog-data.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, MatDialogModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  ghostCount = 0;
  ghosts: { id: string; exploded: boolean }[];
  readonly dialog = inject(MatDialog);

  constructor() {
    this.ghosts = [
      { id: 'aGhost', exploded: false },
      { id: 'bGhost', exploded: false },
      { id: 'cGhost', exploded: false },
      { id: 'dGhost', exploded: false },
      { id: 'eGhost', exploded: false },
    ];
  }


  openDialog(content: string) {
    const dialogRef = this.dialog.open(DialogDataComponent, {
      maxWidth: 'none',
      data: {
        title: content
      },
    });

    dialogRef.afterClosed();

  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const divElement = document.querySelector(
      '.pacmanPlayground'
    ) as HTMLElement;
    // Change le curseur pendant le clic
    divElement.style.cursor =
      "url('/assets/images/cursor/pacmanCursorClick.png'), auto";
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    const divElement = document.querySelector(
      '.pacmanPlayground'
    ) as HTMLElement;
    // Remet le curseur à son état initial après le clic
    divElement.style.cursor =
      "url('/assets/images/cursor/pacmanCursor.png'), auto";
  }
  // Méthode qui applique l'explosion à la div cliquée
  explodeGhost(event: MouseEvent) {
    const ghostElement = event.currentTarget as HTMLElement;

    const ghostId = ghostElement.classList[1];
    const ghost = this.ghosts.find((ghost) => ghost.id === ghostId);

    if (ghost && !ghost.exploded) {
      ghostElement.classList.add('explode');
      this.ghostCount++;
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
      this.explodeGhost({
        currentTarget: ghostElement,
      } as unknown as MouseEvent);
    }
  }

}
