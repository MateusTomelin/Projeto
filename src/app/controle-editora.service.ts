import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    new Editora(1, 'Editora A'),
    new Editora(2, 'Editora B'),
    new Editora(3, 'Editora C')
  ];

  constructor() { }

  // Retorna a lista completa de editoras
  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  // Retorna o nome da editora dado o código
  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora?.nome;
  }
}
