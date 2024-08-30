import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    new Livro(1, 1, 'Livro A', 'Resumo do Livro A', ['Autor A']),
    new Livro(2, 2, 'Livro B', 'Resumo do Livro B', ['Autor B']),
    new Livro(3, 3, 'Livro C', 'Resumo do Livro C', ['Autor C'])
  ];

  constructor() { }

  // Retorna a lista completa de livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Adiciona um novo livro à lista
  incluir(livro: Livro): void {
    const maxCodigo = this.livros.length > 0
      ? Math.max(...this.livros.map(l => l.codigo))
      : 0;
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  // Remove um livro da lista pelo código
  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
