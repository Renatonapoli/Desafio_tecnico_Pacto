import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/service/dados.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  dados: any[] = [];

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.obterDados()
  }

  obterDados() {
    this.dadosService.obterDados().subscribe(dados => {
      this.dados = dados
    })
  }
}
