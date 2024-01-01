import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmationDialogComponent } from '../../../components/confirmation-dialog/confirmation-dialog.component';
import { ResponseDialogComponent } from '../../../components/response-dialog/response-dialog.component';
import { RoutePaths } from '../../../route-paths';
import { AccceptedStationsService } from '../../../services/accepted-stations-Service';
import { AccceptedServicesService } from '../../../services/accepted-services-service';
import { ServiceDetailsViewComponent } from '../../../components/service-details-view/service-details-view.component';

@Component({
  selector: 'app-service-details',
  standalone: true,
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
  imports: [ServiceDetailsViewComponent],
  providers: [AccceptedServicesService],
})
export class ServiceDetailsComponent implements OnInit {
  id!: string;
  Data: any;
  isLoading = true;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private ServicesService: AccceptedServicesService,
    private dialog: MatDialog,
    private router: Router
  ) {
    // Subscribe to route params in the constructor
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(async (params) => {
        this.id = params['serviceId'];
        console.log(' ID:', this.id);

        // Call the service to get request data asynchronously
        await this.getServiceData(this.id.toString());
      });
  }

  async ngOnInit(): Promise<void> {}

  ngOnDestroy(): void {
    // Unsubscribe from the params observable to avoid memory leaks
    this.destroy$.next();
    this.destroy$.complete();
  }

  async getServiceData(Id: string): Promise<void> {
    console.log(Id);
    try {
      this.Data = await this.ServicesService.geById(Id).toPromise();
      console.log(' Data:', this.ServicesService);
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
      if (Dialogmessage == 'Delete') this.RemoveService();
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
        `pages/stations/${RoutePaths.acceptedServices}`
      );
    });
  }

  RemoveService(): void {
    // Assuming this.RequestId is set correctly before calling removeRequest
    this.ServicesService.removeService(this.id).subscribe(
      (response) => {
        // Handle the successful response here
        console.log(' response denied:', response);
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
    console.log('Request denied:', this.id);
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
