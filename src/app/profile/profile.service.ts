import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as profileData from '../../../src/profile-data.json';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileData: any = (profileData as any).default;

  constructor(private http:HttpClient) { 
  }
  getAbout():Observable<any>{
    return this.profileData.about;
  }
  getAbout1():Observable<any>{
    return this.profileData.about1;
  }
  getAbout2():Observable<any>{
    return this.profileData.about2;
  }
  getSkills(): Observable<any> {
    return this.profileData.skillData;
  }
  getResumeUrl():Observable<any>{
    return this.profileData.resumeurl;
  }

  getProjects(): Observable<any> {
    return this.profileData.projectData;
  }
  getEducation(): Observable<any> {
    return this.profileData.educationData;
  }
  getReference():Observable<any>{
    return this.profileData.referenceData;
  }
  getExperience(): Observable<any> {
    return this.profileData.experienceData;  
  }

  extraCircular(): Observable<any> {
    return this.profileData.extraCircularData;
  }
}
