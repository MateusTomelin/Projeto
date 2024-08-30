// src/app/livro-dados/livro-dados.component.ts
import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { Editora } from './editora';
import { Livro } from './livro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro(); // Instancia um novo Livro
  public autoresForm: string = ''; // Inicializa autoresForm como uma string vazia
  public editoras: Editora[] = []; // Inicializa o vetor de editoras

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router // Injeta o Router
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n'); // Preenche autores com base em autoresForm
    this.servLivros.incluir(this.livro); // Inclui o livro
    this.router.navigateByUrl('/lista'); // Navega para a rota lista
  };
}
