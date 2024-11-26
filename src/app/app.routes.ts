import { RouterModule, Routes } from '@angular/router';
import { JabiComponent } from './jabi/jabi.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'jabi', component: JabiComponent }
];
