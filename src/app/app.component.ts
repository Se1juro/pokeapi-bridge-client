import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { checkLogged } from './state/actions/auth.actions';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(checkLogged());
  }
  title = 'PokeApi Client';
  getName(): void {
    console.log('Hello world');
  }
}
