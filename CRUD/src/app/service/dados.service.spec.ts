import { TestBed } from '@angular/core/testing';
import { DadosService } from './dados.service';

describe('DadosService', () => {
  let service: DadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data', (done: DoneFn) => {
    service.obterDados().subscribe(data => {
      expect(data).toEqual(service['dados']);
      done();
    });
  });

  it('should retrieve data by id', (done: DoneFn) => {
    const id = 1;
    service.obterDadoPorId(id).subscribe(data => {
      const expectedData = service['dados'].find(d => d.id === id);
      expect(data).toEqual(expectedData);
      done();
    });
  });

  it('should save new data', (done: DoneFn) => {
    const newData = { id: 3, nome: 'Teste', dataNascimento: '01/01/2000', classificacao: 'C' };

    service.salvarDado(newData).subscribe(savedData => {
      expect(savedData).toEqual(newData);
      expect(service['dados']).toContain(newData);
      done();
    });
  });

  it('should throw error when saving duplicate data', (done: DoneFn) => {
    const duplicateData = service['dados'][0];

    service.salvarDado(duplicateData).subscribe(
      () => {},
      error => {
        expect(error).toEqual('Usuário já existe na lista.');
        done();
      }
    );
  });

  it('should throw error when saving incomplete data', (done: DoneFn) => {
    const incompleteData = { id: 3, nome: 'Teste' };

    service.salvarDado(incompleteData).subscribe(
      () => {},
      error => {
        expect(error).toEqual('Todos os campos são obrigatórios.');
        done();
      }
    );
  });

  it('should delete data', (done: DoneFn) => {
    const idToDelete = 1;

    service.excluirDado(idToDelete).subscribe(deletedData => {
      expect(deletedData).toBeNull();
      expect(service['dados'].some(d => d.id === idToDelete)).toBeFalsy();
      done();
    });
  });
});