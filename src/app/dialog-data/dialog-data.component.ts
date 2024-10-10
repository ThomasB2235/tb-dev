import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-data',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, TranslateModule],
  templateUrl: './dialog-data.component.html',
  styleUrl: './dialog-data.component.scss'
})
export class DialogDataComponent {
  data = inject(MAT_DIALOG_DATA);

}
