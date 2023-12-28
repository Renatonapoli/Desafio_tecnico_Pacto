import { Component, OnInit  } from '@angular/core';
import { Pessoa } from '../../model/pessoa.lista.model';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css'],
})

export class PessoaListaComponent implements OnInit {
  pessoas: Pessoa[] = [];
  router: any;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.pessoaService.listarPessoas().subscribe((pessoas) => {
      this.pessoas = pessoas;
    });
  }

  navegarParaFormulario(id: number): void {
    
    this.router.navigate(['/pessoa', id]);
  }
}