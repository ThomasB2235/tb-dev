import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-data',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, TranslateModule, CommonModule],
  templateUrl: './dialog-data.component.html',
  styleUrl: './dialog-data.component.scss'
})
export class DialogDataComponent {

  isDevelopCareer: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }
}
