import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadedPokemons } from 'src/app/state/actions/pokemons.actions';
import { selectLoadingPokemon } from 'src/app/state/selectors/pokemon.selector';
import { IPokemonResponse } from './interfaces/IPokemonResponse.interface';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  $loading: Observable<boolean> = new Observable();
  constructor(
    private store: Store<any>,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.$loading = this.store.select(selectLoadingPokemon);
    this.store.dispatch(loadedPokemons({ pokemons: [] }));
    // this.store.dispatch(getPokemonList());
    this.pokemonService.getPokemons().subscribe((res: IPokemonResponse) => {
      this.store.dispatch(loadedPokemons({ pokemons: res.rows }));
    });
  }
}
