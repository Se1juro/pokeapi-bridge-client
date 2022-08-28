import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPokemon } from 'src/app/modules/pokemons/interfaces/pokemon.interface';
import { getPokemonByName } from 'src/app/state/actions/pokemons.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectCurrentPokemon,
  selectLoadingPokemon,
} from 'src/app/state/selectors/pokemon.selector';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent implements OnInit {
  loading$: boolean = false;
  name: string = '';
  pokemon!: IPokemon | undefined;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.name = String(param.get('name'));
    });

    this.store.dispatch(getPokemonByName({ name: this.name }));

    this.store
      .select(selectLoadingPokemon)
      .subscribe((res) => (this.loading$ = res));
    this.store
      .select(selectCurrentPokemon)
      .subscribe((res) => (this.pokemon = res));
  }
}
