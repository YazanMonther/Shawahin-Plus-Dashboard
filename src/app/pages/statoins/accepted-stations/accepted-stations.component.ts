import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../../components/table/table.component';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-Storage-Service';
import { RoutePaths } from '../../../route-paths';
import { MatTableDataSource } from '@angular/material/table';
import { AccceptedStationsService } from '../../../services/accepted-stations-Service';

@Component({
  selector: 'app-accepted-stations',
  standalone: true,
  templateUrl: './accepted-stations.component.html',
  styleUrl: './accepted-stations.component.scss',
  imports: [MatPaginatorModule, HttpClientModule, TableComponent],
  providers: [AccceptedStationsService],
})
export class AcceptedStationsComponent {
  IdType: string = 'stationId';
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  onRowClick(StationId: string): void {
    // Access the requestId here
    console.log('Row Clicked. StationId:', StationId);

    // Now you can use this requestId as needed, such as for navigation.
    this.router.navigate([
      `${RoutePaths.stations}/${RoutePaths.stationDetails}/${StationId}`,
    ]);
  }

  private acceptedService = inject(AccceptedStationsService);
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'stationId',
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
      `/${RoutePaths.stations}/${RoutePaths.acceptedStations}`
    );
  }

  getAllRequests() {
    return this.acceptedService.getAll();
  }
}
