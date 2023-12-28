import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { ListaComponent } from './lista.component';
import { DadosService } from 'src/app/service/dados.service';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dadosServiceSpy: jasmine.SpyObj<DadosService>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    dadosServiceSpy = jasmine.createSpyObj('DadosService', ['obterDados', 'excluirDado']);

    TestBed.configureTestingModule({
      declarations: [ListaComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: DadosService, useValue: dadosServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data on init', () => {
    const dados = [{ id: 1, nome: 'Teste', dataNascimento: '01/01/2000', classificacao: 'C' }];
    dadosServiceSpy.obterDados.and.returnValue(of(dados));

    component.ngOnInit();

    expect(component.dados).toEqual(dados);
  });

 


});