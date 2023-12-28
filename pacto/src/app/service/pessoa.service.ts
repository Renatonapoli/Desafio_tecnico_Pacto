import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pessoa } from '../model/pessoa.lista.model';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private pessoas: Pessoa[] = [];

  listarPessoas(): Observable<Pessoa[]> {
    return of(this.pessoas);
  }

  adicionarPessoa(pessoa: Pessoa): Observable<void> {
    this.pessoas.push(pessoa);
    return of();
  }

  obterPessoaPorId(id: number): Observable<Pessoa | undefined> {
    return of(this.pessoas.find((p) => p.id === id));
  }
}