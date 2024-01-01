import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog'; // Ensure this line is present
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-response-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './response-dialog.component.html',
  styleUrl: './response-dialog.component.scss',
})
export class ResponseDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public responseData: any) {}
}
