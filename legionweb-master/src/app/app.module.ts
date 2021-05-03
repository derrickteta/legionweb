import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BannerComponent } from './components/banner/banner.component';
import { PlandevolComponent } from './pages/plandevol/plandevol.component';
import { EntonnoirComponent } from './pages/entonnoir/entonnoir.component';
import { AcquisitionComponent } from './pages/acquisition/acquisition.component';
import { PilotageComponent } from './pages/pilotage/pilotage.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AccueilComponent,
    ClientsComponent,
    ContactComponent,
    EquipeComponent,
    ServicesComponent,
    BlogComponent,
    ArticlesComponent,
    BannerComponent,
    PlandevolComponent,
    EntonnoirComponent,
    AcquisitionComponent,
    PilotageComponent
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
