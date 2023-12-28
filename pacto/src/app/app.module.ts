import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PessoaListaComponent } from '../app/components/pessoa-lista/pessoa-lista.component';
import { PessoaFormularioComponent } from '../app/components/pessoa-formulario/pessoa-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaListaComponent,
    PessoaFormularioComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
