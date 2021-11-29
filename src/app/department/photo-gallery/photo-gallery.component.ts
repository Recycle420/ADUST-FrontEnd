import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  department:any = "";
  departmentId= 0;
  loadingGallery = 0;
  galleryImages:any = [];
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.departmentId = Number(this.route.snapshot.paramMap.get('id'));
    this.department = this.route.snapshot.paramMap.get('department');
    this.loadingGallery = 1;
    this.apiService.getGallery(this.departmentId).subscribe((gallery:any)=>{
      this.loadingGallery = 2;
      this.galleryImages = gallery;
    })
  }

}
