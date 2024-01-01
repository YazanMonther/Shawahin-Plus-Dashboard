import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StationsRequestService } from '../../../services/stations-requests.service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfirmationDialogComponent } from '../../../components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ResponseDialogComponent } from '../../../components/response-dialog/response-dialog.component';
import { DetailsViewComponent } from '../../../components/details-view/details-view.component';
@Component({
  selector: 'app-request-details',
  standalone: true,
  imports: [CommonModule, DetailsViewComponent],
  providers: [StationsRequestService],
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
})
export class RequestDetailsComponent implements OnInit {
  RequestId!: string;
  requestData: any;
  isLoading = true;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private requestService: StationsRequestService,
    private dialog: MatDialog,
    private router: Router
  ) {
    // Subscribe to route params in the constructor
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(async (params) => {
        this.RequestId = params['requestId'];
        console.log('Request ID:', this.RequestId);

        // Call the service to get request data asynchronously
        await this.getRequestData(this.RequestId.toString());
      });
  }

  async ngOnInit(): Promise<void> {
    // If there is any additional initialization logic, you can put it here
  }

  ngOnDestroy(): void {
    // Unsubscribe from the params observable to avoid memory leaks
    this.destroy$.next();
    this.destroy$.complete();
  }

  async getRequestData(RequestId: string): Promise<void> {
    console.log(RequestId);
    try {
      this.requestData = await this.requestService
        .getReqById(RequestId)
        .toPromise();
      console.log('Request Data:', this.requestData);
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
      if (result) {
        // User clicked "Accept"
        if (Dialogmessage == 'accept') this.acceptRequest();
        else if (Dialogmessage == 'deny') this.denyRequest();
        else if (Dialogmessage == 'remove') this.removeRequest();
      }
    });
  }
  openResponseDialog(response: any): void {
    const dialogRef = this.dialog.open(ResponseDialogComponent, {
      width: '400px',
      data: response,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Response dialog closed');
      this.router.navigateByUrl('pages/stations');
    });
  }

  acceptRequest(): void {
    this.requestService.acceptRequest(this.RequestId).subscribe(
      (response) => {
        // Handle the successful response here
        console.log('Request accepted:', response);

        // Access and print the 'Message' property
        console.log('Response Message:', response.message);

        // Open the response dialog with the entire response body
        this.openResponseDialog(response.message);
      },
      (error) => {
        // Handle the error here
        console.error('Error accepting request:', error);
        this.openResponseDialog(error);
      }
    );
  }

  denyRequest(): void {
    // Assuming this.RequestId is set correctly before calling removeRequest
    this.requestService.denayRequest(this.RequestId).subscribe(
      (response) => {
        // Handle the successful response here
        console.log('Request response denied:', response);
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
    console.log('Request denied:', this.RequestId);
  }

  removeRequest(): void {
    // Assuming this.RequestId is set correctly before calling removeRequest
    this.requestService.removeRequest(this.RequestId).subscribe(
      (response) => {
        // Handle the successful response here
        console.log('Request response removed:', response);
        console.log('Response Message:', response.message);

        // Open the response dialog with the entire response body
        this.openResponseDialog(response.message);
      },
      (error) => {
        // Handle the error here
        console.error('Error removing request:', error);
        this.openResponseDialog(error);
      }
    );
    console.log('Request removed:', this.RequestId);
  }
}
