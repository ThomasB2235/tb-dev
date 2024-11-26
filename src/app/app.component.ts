import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";
import {MatGridListModule} from '@angular/material/grid-list';
import { SkillsComponent } from "./skills/skills.component";
import { ProductsComponent } from "./products/products.component";
import { AboutComponent } from "./about/about.component";
import { filter } from 'rxjs/operators';
import { NgIf } from '@angular/common';


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
    NgIf,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    MatGridListModule,
    SkillsComponent,
    ProductsComponent,
    AboutComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  languageChoice: string;
  isOriginalCursor = true;
  title = 'Thomas Bureller';
  showHeader = true;
  showFooter = true;
  showOtherComponents = true;

  constructor(private translateService: TranslateService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      // Vérifier si l'URL contient '/jabi' et cacher les autres composants si nécessaire
      this.showHeader = this.router.url !== '/jabi';
      this.showFooter = this.router.url !== '/jabi';
      this.showOtherComponents = this.router.url !== '/jabi';
    });
    this.translateService.addLangs(['fr', 'en']);
    this.translateService.setDefaultLang(localStorage.getItem('lang') || 'fr');
    this.languageChoice = localStorage.getItem('lang') || 'fr';
    this.translateService.use(this.languageChoice);
  }
  }




