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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { AuthModule } from './modules/auth/auth.module';
import { authReducer } from './state/reducers/auth.reducer';
import { AuthEffects } from './state/effects/auth.effects';
import { HttpRequestInterceptor } from './interceptors/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoPokemonComponent,
    NotFoundComponent,
    PokemonInfoComponent,
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
    AuthModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot({ pokemons: pokemonsReducer, auth: authReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([PokemonsEffects, AuthEffects]),
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
