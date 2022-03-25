import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './navigatin/page-not-found/page-not-found.component';
import { AboutUsComponent } from './navigation/about-us/about-us.component';
import { ContactUsComponent } from './navigation/contact-us/contact-us.component';
import { HomeComponent } from './navigation/home/home.component';
import { SingUpComponent } from './navigation/sing-up/sing-up.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path: 'sing-up',component:SingUpComponent },
  {path:'contactus',component:ContactUsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
