import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/peessoa.model';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css'],
})
export class PessoaListaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.pessoaService.listarPessoas().subscribe((pessoas) => {
      this.pessoas = pessoas;
    });
  }
}