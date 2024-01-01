import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills : any;
  constructor(private profileService:ProfileService) {

   }
  
  ngOnInit() {
    this.skills =  this.profileService.getSkills();
    AOS.init();
AOS.refreshHard();
  }

}
