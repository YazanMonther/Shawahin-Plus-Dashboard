import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-view',
  standalone: true,
  imports: [NgIf],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.scss',
})
export class DetailsViewComponent {
  @Input() Data: any;
}
