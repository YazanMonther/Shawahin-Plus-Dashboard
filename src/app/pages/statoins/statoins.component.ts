import { Component } from '@angular/core';
import { RequestTableComponent } from './request-table/request-table.component';
import { RouterModule } from '@angular/router';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-statoins',
  standalone: true,
  templateUrl: './statoins.component.html',
  styleUrl: './statoins.component.scss',
  imports: [RequestTableComponent, RouterModule, NgClass],
})
export class StatoinsComponent {
  isLinkActive(url: string): boolean {
    return location.pathname === url;
  }
}
