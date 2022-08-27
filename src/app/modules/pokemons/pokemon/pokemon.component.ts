import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadedPokemons } from 'src/app/state/actions/pokemons.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListPokemons } from 'src/app/state/selectors/pokemon.selector';
import { IPokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemons: Observable<any> = new Observable();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.pokemons = this.store.select(selectListPokemons);
  }
}
