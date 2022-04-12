import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-payment-procedure',
  templateUrl: './payment-procedure.component.html',
  styleUrls: ['./payment-procedure.component.scss']
})
export class PaymentProcedureComponent implements OnInit, OnDestroy {

  private subscr!: Subscription;
  loadingResult = 0;
  result: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadResults();
  }

  loadResults() {
    this.subscr = this.apiService.getPaymentProcedure().subscribe((data: any) => {
      this.result = data;
      this.loadingResult = 1;
    })
  }

  ngOnDestroy(){
    this.subscr.unsubscribe();
  }

}
