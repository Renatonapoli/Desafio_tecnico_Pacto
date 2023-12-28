import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaListaComponent,
    PessoaFormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
