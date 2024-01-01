// app-table.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] | undefined;
  @Input() pageSizeOptions: number[] | undefined;
  @Input() IdType: string = '';
  @Output() rowClick: EventEmitter<string> = new EventEmitter<string>();

  onRowClick(Id: string): void {
    this.rowClick.emit(Id);
  }
}
