import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private dados = [
    { id: 1, nome: 'João Carlos José', dataNascimento: '01/01/1990', classificacao: 'A' },
    { id: 2, nome: 'Maria Clara Santana', dataNascimento: '15/05/1985', classificacao: 'B' }
  ];

  private dadosSubject = new BehaviorSubject<any[]>(this.dados);

  obterDados(): Observable<any[]> {
    return this.dadosSubject.asObservable();
  }

  obterDadoPorId(id: number): Observable<any> {
    const dado = this.dados.find(d => d.id === id);
    return of(dado);
  }

  salvarDado(dado: any): Observable<any> {
    const dadosIguais = this.dados.some(d => this.saoIguais(d, dado));

    if (dadosIguais) {
      return throwError('Usuário já existe na lista.');
    }

    if (!dado.nome || !dado.dataNascimento || !dado.classificacao) {
      return throwError('Todos os campos são obrigatórios.');
    }

    dado.id = this.generateUniqueId();
    this.dados.push(dado);
    this.dadosSubject.next([...this.dados]);
    return of(dado);
  }

  private saoIguais(dado1: any, dado2: any): boolean {
    return (
      dado1.nome.toLowerCase() === dado2.nome.toLowerCase() &&
      dado1.dataNascimento === dado2.dataNascimento &&
      dado1.classificacao === dado2.classificacao
    );
  }

  excluirDado(id: number): Observable<any> {
    this.dados = this.dados.filter(d => d.id !== id);
    this.dadosSubject.next([...this.dados]);
    return of(null);
  }

  private generateUniqueId(): number {
    return this.dados.length + 1;
  }
}