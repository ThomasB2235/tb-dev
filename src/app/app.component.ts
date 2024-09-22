import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['fr', 'en']);
    this.translateService.setDefaultLang(localStorage.getItem('lang') || 'fr');
    this.translateService.use('fr');
  }

  title = 'tb-dev';
}
