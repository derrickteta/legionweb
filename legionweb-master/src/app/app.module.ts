import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


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
import { SuccesComponent } from './components/succes/succes.component';
import { ClientComponent } from './components/client/client.component';
import { ParlentdenousComponent } from './components/parlentdenous/parlentdenous.component';
import { DiscuterComponent } from './components/discuter/discuter.component';
import { EquipesComponent } from './components/equipes/equipes.component';
import { RetourexpComponent } from './components/retourexp/retourexp.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { RegisterService } from './services/register.service';
import { RenderarticlesComponent } from './pages/renderarticles/renderarticles.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormationComponent } from './pages/formation/formation.component';



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
    PilotageComponent,
    SuccesComponent,
    ClientComponent,
    ParlentdenousComponent,
    DiscuterComponent,
    EquipesComponent,
    RetourexpComponent,
    NewsletterComponent,
    RenderarticlesComponent,
    DashboardComponent,
    FormationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
