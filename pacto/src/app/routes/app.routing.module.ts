import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaFormularioComponent } from '../components/pessoa-formulario/pessoa-formulario.component';
import { PessoaListaComponent } from '../components/pessoa-lista/pessoa-lista.component';

const routes: Routes = [
  { path: '', component: PessoaListaComponent },
  { path: 'pessoa/nova', component: PessoaFormularioComponent },
  { path: 'pessoa/:id', component: PessoaFormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}