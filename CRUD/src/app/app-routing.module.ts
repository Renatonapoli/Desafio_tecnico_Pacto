import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {path: 'lista', component: ListaComponent},
  {path: 'formulario/:id', component: FormularioComponent},
  {path: '', redirectTo: '/lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
