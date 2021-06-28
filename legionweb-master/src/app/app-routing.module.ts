import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './pages/services/services.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PlandevolComponent } from './pages/plandevol/plandevol.component';
import { EntonnoirComponent } from './pages/entonnoir/entonnoir.component';
import { AcquisitionComponent } from './pages/acquisition/acquisition.component';
import { PilotageComponent } from './pages/pilotage/pilotage.component';
import { DiscuterComponent } from './components/discuter/discuter.component';

const routes: Routes = [
  {
    path:"", component: AccueilComponent
  },
  {
    path:"home", component: AccueilComponent
  },
  {
    path:"contact" , component: ContactComponent
  },
  {
    path:"equipe", component: EquipeComponent
  },
  {
    path:"service/plandevol", component:PlandevolComponent
  },
  {
    path:"service/entonnoir", component:EntonnoirComponent
  },
  {
    path:"service/acquisition", component:AcquisitionComponent
  },
  {
    path:"service/pilotage", component:PilotageComponent
  },
  {
    path:"clients", component:ClientsComponent
  },
  {
    path:"blog", component:BlogComponent
  },
  { 
    path: '',   redirectTo: '/first-component', pathMatch: 'full' 
  },
  { 
    path: '**', component:AccueilComponent
  },
  { 
    path: 'home/discuter', component:DiscuterComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
        scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
