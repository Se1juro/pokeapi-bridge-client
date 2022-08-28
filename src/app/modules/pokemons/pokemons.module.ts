import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MaterialModule } from 'src/app/material.module';
import { InputSearchComponent } from './input-search/input-search.component';

@NgModule({
  declarations: [PokemonsComponent, PokemonComponent, InputSearchComponent],
  imports: [CommonModule, PokemonsRoutingModule, MaterialModule],
})
export class PokemonsModule {}
