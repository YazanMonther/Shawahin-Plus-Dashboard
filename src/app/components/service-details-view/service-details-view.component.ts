import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-details-view',
  standalone: true,
  imports: [NgIf],
  templateUrl: './service-details-view.component.html',
  styleUrl: './service-details-view.component.scss',
})
export class ServiceDetailsViewComponent {
  @Input() Data: any;
}
