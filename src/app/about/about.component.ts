import { AfterViewInit, Component, ElementRef, HostListener, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogDataComponent } from '../dialog-data/dialog-data.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, MatDialogModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})

export class AboutComponent implements AfterViewInit {
  ghostCount = 0;
  ghosts: { id: string; exploded: boolean }[];
  showPortal = false;
  readonly dialog = inject(MatDialog);

  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;
  @ViewChildren('aboutButton') aboutButtons!: QueryList<ElementRef<HTMLElement>>;

  constructor() {
    this.ghosts = [
      { id: 'aGhost', exploded: false },
      { id: 'bGhost', exploded: false },
      { id: 'cGhost', exploded: false },
      { id: 'dGhost', exploded: false },
      { id: 'eGhost', exploded: false },
    ];
  }

  ngAfterViewInit(): void {
    if (this.aboutSection) {
      const observer: IntersectionObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]): void => {
          entries.forEach((entry: IntersectionObserverEntry): void => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(this.aboutSection.nativeElement);
    }

    if (this.aboutButtons) {
      const observer: IntersectionObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]): void => {
          entries.forEach((entry: IntersectionObserverEntry): void => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('in-view-buttons');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      this.aboutButtons.forEach(button => {
        observer.observe(button.nativeElement);
      });
    }
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

  explodeGhost(event: MouseEvent) {
    const ghostElement = event.currentTarget as HTMLElement;
    const ghostId = ghostElement.classList[1];
    const ghost = this.ghosts.find((ghost) => ghost.id === ghostId);

    if (ghost && !ghost.exploded) {
      ghost.exploded = true;
      ghostElement.classList.add('vanishing');
      this.ghostCount++;

      setTimeout(() => {
        ghostElement.style.display = 'none';
      }, 500);

      if (this.ghostCount === this.ghosts.length) {
        this.triggerEasterEgg();
      }
    }
  }

  private triggerEasterEgg() {
    // Activer le portail
    this.showPortal = true;

    // Jouer un son si disponible
    const audio = new Audio('assets/sounds/portal.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => {}); // Ignorer si le son n'est pas disponible

    // Ajouter un effet de tremblement à l'écran
    document.body.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 500);

    // Déclencher le dialogue après un délai
    setTimeout(() => {
      this.aboutButtons.first.nativeElement.dispatchEvent({
        type: 'click',
        bubbles: true
      } as unknown as MouseEvent);
    }, 2000);
  }

  handleGhostClick(event: MouseEvent) {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const ghostElement = target.closest('.ghost');
    if (ghostElement) {
      this.explodeGhost({
        currentTarget: ghostElement,
      } as unknown as MouseEvent);
    }
  }
}
