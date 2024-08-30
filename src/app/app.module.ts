import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component'; // Verifique o caminho correto
import { LivroDadosComponent } from './livro-dados/livro-dados.component'; // Certifique-se de que também está importado
import { FormsModule } from '@angular/forms'; // Adicione FormsModule
import { RouterModule, Routes } from '@angular/router'; // Adicione RouterModule

// Defina as rotas
const routes: Routes = [
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    LivroDadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicione FormsModule
    RouterModule.forRoot(routes) // Adicione RouterModule e configure as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
