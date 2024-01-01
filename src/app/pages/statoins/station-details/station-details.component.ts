import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AccceptedStationsService } from '../../../services/accepted-stations-Service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../components/confirmation-dialog/confirmation-dialog.component';
import { ResponseDialogComponent } from '../../../components/response-dialog/response-dialog.component';
import { DetailsViewComponent } from '../../../components/details-view/details-view.component';
import { RoutePaths } from '../../../route-paths';

@Component({
  selector: 'app-station-details',
  standalone: true,
  templateUrl: './station-details.component.html',
  styleUrl: './station-details.component.scss',
  providers: [AccceptedStationsService],
  imports: [DetailsViewComponent],
})
export class StationDetailsComponent implements OnInit {
  StationId!: string;
  Data: any;
  isLoading = true;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private StationsService: AccceptedStationsService,
    private dialog: MatDialog,
    private router: Router
  ) {
    // Subscribe to route params in the constructor
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(async (params) => {
        this.StationId = params['stationId'];
        console.log('station ID:', this.StationId);

        // Call the service to get request data asynchronously
        await this.getStationData(this.StationId.toString());
      });
  }

  async ngOnInit(): Promise<void> {}

  ngOnDestroy(): void {
    // Unsubscribe from the params observable to avoid memory leaks
    this.destroy$.next();
    this.destroy$.complete();
  }

  async getStationData(StationId: string): Promise<void> {
    console.log(StationId);
    try {
      this.Data = await this.StationsService.geById(StationId).toPromise();
      console.log('Request Data:', this.StationsService);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.isLoading = false;
    }
  }

  openConfirmationDialog(Dialogmessage: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirmation',
        message: `Are you sure you want to ${Dialogmessage}?`,
      },
    });

    dialogRef.componentInstance.cancelButtonClass =
      Dialogmessage === 'accept' ? 'red-button' : 'green-button';
    dialogRef.componentInstance.acceptButtonClass =
      Dialogmessage === 'accept' ? 'green-button' : 'red-button';
    dialogRef.componentInstance.buutonText = Dialogmessage;

    dialogRef.afterClosed().subscribe((result: any) => {
      // User clicked "Accept"
      if (Dialogmessage == 'Delete') this.RemoveStation();
    });
  }
  openResponseDialog(response: any): void {
    const dialogRef = this.dialog.open(ResponseDialogComponent, {
      width: '400px',
      data: response,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Response dialog closed');
      this.router.navigateByUrl(
        `pages/stations/${RoutePaths.acceptedStations}`
      );
    });
  }

  RemoveStation(): void {
    // Assuming this.RequestId is set correctly before calling removeRequest
    this.StationsService.removeStation(this.StationId).subscribe(
      (response) => {
        // Handle the successful response here
        console.log('Station response denied:', response);
        console.log('Response Message:', response.message);

        // Open the response dialog with the entire response body
        this.openResponseDialog(response.message);
      },
      (error) => {
        // Handle the error here
        console.error('Error denaying request:', error);
        this.openResponseDialog(error);
      }
    );
    console.log('Request denied:', this.StationId);
  }

  // removeRequest(): void {
  //   // Assuming this.RequestId is set correctly before calling removeRequest
  //   this.StationsService.re(this.StationId).subscribe(
  //     (response) => {
  //       // Handle the successful response here
  //       console.log('Request response removed:', response);
  //       console.log('Response Message:', response.Message);

  //       // Open the response dialog with the entire response body
  //       this.openResponseDialog(response.Message);
  //     },
  //     (error) => {
  //       // Handle the error here
  //       console.error('Error removing request:', error);
  //       this.openResponseDialog(error);
  //     }
  //   );
  //   console.log('Request removed:', this.RequestId);
  // }
}
