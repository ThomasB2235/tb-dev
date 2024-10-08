import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";
import {MatGridListModule} from '@angular/material/grid-list';
import { SkillsComponent } from "./skills/skills.component";
import { ProductsComponent } from "./products/products.component";
import { AboutComponent } from "./about/about.component";


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
    MatGridListModule,
    SkillsComponent,
    ProductsComponent,
    AboutComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  isOriginalCursor = true;
  title = 'Thomas Bureller';

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['fr', 'en']);
    this.translateService.setDefaultLang(localStorage.getItem('lang') || 'fr');
    this.translateService.use('fr');
  }
  }




