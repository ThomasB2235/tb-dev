import { Component, OnInit } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatRadioModule, FormsModule, MatCheckboxModule, MatSlideToggleModule, MatCardModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent implements OnInit {

  lang: string = 'fr';
  isChecked = false;

    constructor(private translateService: TranslateService) {

  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'fr';
  }

  onChange(choice: boolean) {
   if(choice) {
    this.lang  = 'en';
    localStorage.setItem('lang', this.lang);
    this.translateService.use('en');

  } else {
    this.lang = 'fr';
    localStorage.setItem('lang', this.lang);
    this.translateService.use('fr');
  }
}

}
