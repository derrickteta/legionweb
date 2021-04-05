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

const routes: Routes = [
  {
    path:"", component: AccueilComponent
  },
  {
    path:"contact" , component: ContactComponent
  },
  {
    path:"equipe", component: EquipeComponent
  },
  {
    path:"services", component:ServicesComponent
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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
