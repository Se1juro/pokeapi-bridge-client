import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { checkLogged } from 'src/app/state/actions/auth.actions';
import {
  getPokemonList,
  loadedPokemons,
  setCurrentPage,
} from 'src/app/state/actions/pokemons.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectCurrentPage,
  selectLimitPage,
  selectLoadingPokemon,
  selectTotalPages,
  selectTotalRows,
} from 'src/app/state/selectors/pokemon.selector';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  loading$: boolean = false;
  limit$: number = 12;
  currentPage$: number = 1;
  totalPages$: number = 0;
  totalRows$: number = 0;
  loggedIn: boolean = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(selectLoadingPokemon)
      .subscribe((res) => (this.loading$ = res));
    this.store.select(selectLimitPage).subscribe((res) => (this.limit$ = res));
    this.store
      .select(selectTotalPages)
      .subscribe((res) => (this.totalPages$ = res));
    this.store
      .select(selectTotalRows)
      .subscribe((res) => (this.totalRows$ = res));
    this.store
      .select(selectCurrentPage)
      .subscribe((res) => (this.currentPage$ = res));

    this.store.dispatch(
      getPokemonList({
        limit: this.limit$,
        page: this.currentPage$,
      })
    );
  }

  OnPageChange(event: PageEvent): void {
    let { pageIndex } = event;
    this.store.dispatch(
      setCurrentPage({
        page: pageIndex + 1,
      })
    );
  }
}
