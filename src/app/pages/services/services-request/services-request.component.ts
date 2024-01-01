import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-Storage-Service';
import { RoutePaths } from '../../../route-paths';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesRequestService } from '../../../services/services-request';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-services-request',
  standalone: true,
  imports: [MatPaginatorModule, HttpClientModule, TableComponent],
  templateUrl: './services-request.component.html',
  styleUrl: './services-request.component.scss',
  providers: [ServicesRequestService],
})
export class ServicesRequestComponent {
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}
  IdType: string = 'id';
  onRowClick(RequestId: string): void {
    // Access the requestId here
    console.log('Row Clicked. RequestId:', RequestId);

    // Now you can use this requestId as needed, such as for navigation.
    this.router.navigate([
      `${RoutePaths.services}/${RoutePaths.serviceRequestDetails}/${RequestId}`,
    ]);
  }

  private requestService = inject(ServicesRequestService);
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'id',
    'serviceTypeName',
    'serviceName',
    'description',
    'phoneNumber',
    'city',
    'address',
    'requestStatus',
  ];
  pageSizeOptions: any;

  ngOnInit(): void {
    this.getAllRequests().subscribe((data: any[]) => {
      this.dataSource.data = data;
    });
    this.localStorage.setLastVisitedRoute(
      `/${RoutePaths.services}/${RoutePaths.servicesRequest}`
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
