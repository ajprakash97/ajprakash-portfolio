import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about:any; 
  about1:any;
  about2:any;
    constructor(private profileService : ProfileService){}
  
    ngOnInit(){
      this.about =  this.profileService.getAbout();
      this.about1 =  this.profileService.getAbout1();
      this.about2 =  this.profileService.getAbout2();
    }

}
