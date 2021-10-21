import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormationComponent } from './pages/formation/formation.component'
import { ClientsComponent } from './pages/clients/clients.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PlandevolComponent } from './pages/plandevol/plandevol.component';
import { EntonnoirComponent } from './pages/entonnoir/entonnoir.component';
import { AcquisitionComponent } from './pages/acquisition/acquisition.component';
import { PilotageComponent } from './pages/pilotage/pilotage.component';
import { DiscuterComponent } from './components/discuter/discuter.component';
import { InboundmarketingComponent } from './pages/inboundmarketing/inboundmarketing.component';
import { InboundrecruitingComponent } from './pages/inboundrecruiting/inboundrecruiting.component';
import { SeoComponent } from './pages/seo/seo.component';
import { SocialmediaComponent } from './pages/socialmedia/socialmedia.component';
import { TransformationComponent } from './pages/transformation/transformation.component';
import { IndicateurComponent } from './pages/indicateur/indicateur.component';
import { ProductComponent } from './pages/product/product.component';
import { ProspectionComponent } from './pages/prospection/prospection.component';
import { ReferencementnaturelComponent } from './pages/referencementnaturel/referencementnaturel.component';

const routes: Routes = [
  {
    path:"", component: AccueilComponent
  },
  {
    path:"home", component: AccueilComponent
  },
  {
    path:"formation" , component: FormationComponent
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
    path: "home/discuter", component:DiscuterComponent
  },
  { 
    path: "inboundmarketing", component:InboundmarketingComponent
  },
  { 
    path: "inboundrecruiting", component:InboundrecruitingComponent
  },
  { 
    path: "seo", component: SeoComponent
  },
  { 
    path: "socialmedia", component:SocialmediaComponent
  },
  { 
    path: "referencementnaturel", component: ReferencementnaturelComponent
  },
  { 
    path: "transformation", component:TransformationComponent
  },
  { 
    path: "indicateurs", component:IndicateurComponent
  },
  { 
    path: "inboundmarketing", component:InboundmarketingComponent
  },
  { 
    path: "product", component:ProductComponent
  },
  { 
    path: "prospection", component:ProspectionComponent
  },
  { 
    path: '',   redirectTo: '/first-component', pathMatch: 'full' 
  },
  { 
    path: '**', component:AccueilComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
        scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
