import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectLogged } from 'src/app/state/selectors/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logged$: boolean = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectLogged).subscribe((res) => (this.logged$ = res));
  }
}
