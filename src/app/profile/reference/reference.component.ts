import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent {
  referenceData:any;
  constructor(private profileService: ProfileService){}
  ngOnInit(){
    this.referenceData = this.profileService.getReference();
  }
}
