import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../../model/peessoa.model';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-pessoa-formulario',
  templateUrl: './pessoa-formulario.component.html',
  styleUrls: ['./pessoa-formulario.component.css'],
})
export class PessoaFormularioComponent implements OnInit {
  pessoa: Pessoa = { nome: '', dataNascimento: new Date(), classificacao: '' };

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const pessoaId = params['id'];
      if (pessoaId) {
        this.carregarPessoa(pessoaId);
      }
    });
  }

  carregarPessoa(id: number): void {
    this.pessoaService.obterPessoaPorId(id).subscribe((pessoa) => {
      if (pessoa) {
        this.pessoa = pessoa;
      }
    });
  }

  salvarPessoa(): void {
    // Implementar lógica para salvar pessoa
    this.pessoaService.adicionarPessoa(this.pessoa).subscribe(() => {
      console.log('Pessoa salva com sucesso!');
    });
  }
}