import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './navigation/home/home.component';
import { SingUpComponent } from './navigation/sing-up/sing-up.component';
import { AboutUsComponent } from './navigation/about-us/about-us.component';
import { PageNotFoundComponent } from './navigatin/page-not-found/page-not-found.component';
import { ContactUsComponent } from './navigation/contact-us/contact-us.component';
import { FirstpipePipe } from './firstpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SingUpComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    FirstpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
