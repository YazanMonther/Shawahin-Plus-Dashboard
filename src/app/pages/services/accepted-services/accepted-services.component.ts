import { Component, inject } from '@angular/core';
import { RoutePaths } from '../../../route-paths';
import { AccceptedServicesService } from '../../../services/accepted-services-service';
import { MatTableDataSource } from '@angular/material/table';
import { LocalStorageService } from '../../../services/local-Storage-Service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-accepted-services',
  standalone: true,
  imports: [MatPaginatorModule, HttpClientModule, TableComponent],
  templateUrl: './accepted-services.component.html',
  styleUrl: './accepted-services.component.scss',
})
export class AcceptedServicesComponent {
  IdType: string = 'id';
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  onRowClick(Id: string): void {
    // Access the requestId here
    console.log('Row Clicked. StationId:', Id);

    // Now you can use this requestId as needed, such as for navigation.
    this.router.navigate([
      `${RoutePaths.services}/${RoutePaths.serviceDetails}/${Id}`,
    ]);
  }

  private acceptedService = inject(AccceptedServicesService);
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'id',
    'serviceTypeName',
    'serviceName',
    'description',
    'phoneNumber',
    'city',
    'address',
  ];
  pageSizeOptions: any;

  ngOnInit(): void {
    this.getAllRequests().subscribe((data: any) => {
      this.dataSource.data = data;
    });
    this.localStorage.setLastVisitedRoute(
      `/${RoutePaths.services}/${RoutePaths.acceptedServices}`
    );
  }

  getAllRequests() {
    return this.acceptedService.getAll();
  }
}
