// request-table.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; // Add this line
import { StationsRequestService } from '../../../services/stations-requests.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../../../components/table/table.component';
import { Router } from '@angular/router';
import { RoutePaths } from '../../../route-paths';
import { LocalStorageService } from '../../../services/local-Storage-Service';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  standalone: true,
  styleUrls: ['./request-table.component.scss'],
  providers: [StationsRequestService],
  imports: [MatPaginatorModule, HttpClientModule, TableComponent],
})
export class RequestTableComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}
  IdType: string = 'requestId';
  onRowClick(RequestId: string): void {
    // Access the requestId here
    console.log('Row Clicked. RequestId:', RequestId);

    // Now you can use this requestId as needed, such as for navigation.
    this.router.navigate([
      `${RoutePaths.stations}/${RoutePaths.requestDetails}/${RequestId}`,
    ]);
  }

  private requestService = inject(StationsRequestService);
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'requestId',
    'requestStatus',
    'chargerCost',
    'chargerStatus',
    'country',
    'chargerType',
    'stationName',
    'contactName',
    'email',
    'phone',
    'paymentMethod',
    'paymentType',
  ];
  pageSizeOptions: any;

  ngOnInit(): void {
    this.getAllRequests().subscribe((data) => {
      this.dataSource.data = data;
    });
    this.localStorage.setLastVisitedRoute(
      `/${RoutePaths.stations}/${RoutePaths.stationsRequest}`
    );
  }

  getAllRequests() {
    return this.requestService.getAll();
  }

  private updateRequestStatus(requestId: string, status: string): void {
    const index = this.dataSource.data.findIndex(
      (request) => request.requestId === requestId
    );
    if (index !== -1) {
      this.dataSource.data[index].requestStatus = status;
    }
  }
}
