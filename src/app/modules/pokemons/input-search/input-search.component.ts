import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import {
  getPokemonList,
  setPokemonName,
} from 'src/app/state/actions/pokemons.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectCurrentPage,
  selectLimitPage,
} from 'src/app/state/selectors/pokemon.selector';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  public pokemonName: string = '';
  pokemonNameUpdate = new Subject<string>();
  limit$: number = 12;
  currentPage$: number = 1;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectLimitPage).subscribe((res) => (this.limit$ = res));
    this.store
      .select(selectCurrentPage)
      .subscribe((res) => (this.currentPage$ = res));
    this.pokemonNameUpdate
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value) => {
        if (value) {
          this.store.dispatch(
            setPokemonName({
              name: value.toLowerCase(),
              page: this.currentPage$,
            })
          );
        } else {
          this.store.dispatch(
            getPokemonList({
              page: this.currentPage$,
              limit: this.limit$,
            })
          );
        }
      });
  }
}
