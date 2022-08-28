import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPokemonComponent } from './components/info-pokemon/info-pokemon.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/pokemons/pokemons.module').then(
        (m) => m.PokemonsModule
      ),
  },
  {
    path: 'pokedex',
    loadChildren: () =>
      import('./modules/pokemons/pokemons.module').then(
        (m) => m.PokemonsModule
      ),
  },
  {
    path: 'pokemon/:name',
    component: PokemonInfoComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
