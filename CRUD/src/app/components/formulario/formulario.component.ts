import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DadosService } from 'src/app/service/dados.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  id: number | undefined
  nome: string = ''
  dataNascimento: string = ''
  classificacao: string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dadosService: DadosService
  ){}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.id =+ params['id']
        if(this.id) {
          this.carregaDado()
        }
      })
  }

  carregaDado() {
    this.dadosService.obterDadoPorId(this.id!).subscribe(dado => {
      this.nome = dado.none;
      this.dataNascimento = dado.dataNascimento
      this.classificacao = dado.classificacao
    })
  }

  salvar() {
    const dado = {
      id: this.id,
      nome: this.nome,
      dataNascimento: this.dataNascimento,
      classificacao :this.classificacao
    }

    this.dadosService.salvarDado(dado).subscribe(() => {
      console.log('Dado salvo com sucesso')
      this.router.navigate(['/lista'])
    })
  }

  excluir() {
    this.dadosService.excluirDado(this.id!).subscribe(() => {
      console.log('Dado excluído com sucesso!')
      this.router.navigate(['./lista'])
    })
  }
}
