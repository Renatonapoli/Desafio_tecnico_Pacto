import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DadosService {
private dados = [
  {id: 1, nome: 'João', dataNascimento: '1990-01-01', classificacao: 'A'},
  {id: 1, nome: 'Maria', dataNascimento: '1985-05-15', classificacao: 'B'}
]
  obterDados(): Observable<any[]> {
    return of(this.dados)
  }

  obterDadoPorId(id: number): Observable<any> {
    const dado = this.dados.find(d => d.id === id);
    return of(dado)
  }

  salvarDado(dado: any): Observable<any> {
    return of(dado)
  }

  excluirDado(id: number): Observable<any> {
    return of(null)
  }

}
