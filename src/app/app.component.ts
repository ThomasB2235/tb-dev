import { Component } from '@angular/core';
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

  tiles: Tile[] = [
    {text: 'developer', cols: 1, rows: 1, color: '#ffb370'},
    {text: 'cv', cols: 1, rows: 1, color: '#92414d'},
    {text: 'skills', cols: 1, rows: 1, color: '#ffd4ac'},
    {text: 'about', cols: 1, rows: 1, color: '#384358'},
  ];

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['fr', 'en']);
    this.translateService.setDefaultLang(localStorage.getItem('lang') || 'fr');
    this.translateService.use('fr');
  }

  title = 'Thomas Bureller';
}
