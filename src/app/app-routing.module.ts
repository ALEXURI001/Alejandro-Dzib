import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { NabvarComponent } from './nabvar/nabvar.component';

const routes: Routes = [
  {
    path: 'navbar',
    component: NabvarComponent
  },
  {
    path: 'contenido',
    component: ContenidoComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
