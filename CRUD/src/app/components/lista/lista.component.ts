import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from 'src/app/service/dados.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  dados: any[] = [];

  constructor(private router:Router, private dadosService: DadosService) {}

  ngOnInit(): void {
    this.obterDados()
  }

  obterDados() {
    this.dadosService.obterDados().subscribe(dados => {
      this.dados = dados
    })
  }

  excluirDado(id: number) {
    this.dadosService.excluirDado(id).subscribe(() => {
      alert('Dado excluído com sucesso!');
      this.obterDados(); // Atualiza a lista após a exclusão
    });
  }
}
