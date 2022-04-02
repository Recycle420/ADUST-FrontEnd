import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-admission-administrator',
  templateUrl: './admission-administrator.component.html',
  styleUrls: ['./admission-administrator.component.scss']
})
export class AdmissionAdministratorComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  loadingMember = 0;
  head: any;
  admissionTeams: any = [];
  communicationTeams: any = [];
  iTAndDigitalTeams: any = [];
  routerSubscription!: Subscription;

  ngOnInit(): void {
    this.loadingMember = 1;
    this.routerSubscription = this.apiService.getAdmissionAdminstrators().subscribe((data: any) => {
      this.head = data.filter((x: { orderPriority: number; }) => x.orderPriority == 1);
      this.admissionTeams = data.filter((x: { orderPriority: number; section: string; }) => x.orderPriority > 1 && x.section == 'Admission Team');
      this.communicationTeams = data.filter((x: { orderPriority: number; section: string; }) => x.orderPriority > 1 && x.section == 'Communication Team');
      this.iTAndDigitalTeams = data.filter((x: { orderPriority: number; section: string; }) => x.orderPriority > 1 && x.section == 'IT & Digital');
      this.loadingMember = 2;
    })
  };

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
