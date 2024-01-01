import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', component: ProfileComponent  }, // Redirect to profile page as default
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
  // Add other routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
