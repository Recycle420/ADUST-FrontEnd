import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private apiService:ApiService) {}

  formattedMemberName:any = "";
  member:any = "";
  loadingMember = 0;
  allMembers:any = [];
	routerSubscription!: Subscription;


  ngOnInit(){
    
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.team){
        let role:any = paramMap.params.team;
        this.member = role;
        this.formattedMemberName = role.replace(/-/g, " ");
        this.loadingMember = 1; 
        this.apiService.getAdminstrators(this.member).subscribe((data:any)=>{
          this.allMembers = data;
          this.loadingMember = 2;
        })
      }
    });
  }
  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
  }

}
