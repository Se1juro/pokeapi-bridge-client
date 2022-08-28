import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { InfoPokemonComponent } from './components/info-pokemon/info-pokemon.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonsModule } from './modules/pokemons/pokemons.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { pokemonsReducer } from './state/reducers/pokemons.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffects } from './state/effects/pokemons.effects';
import {
  NgbPaginationModule,
  NgbAlertModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoPokemonComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    PokemonsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot({ pokemons: pokemonsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([PokemonsEffects]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
