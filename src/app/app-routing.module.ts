import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { LoggedGuard } from './guards/logged.guard';
import { LoginFormComponent } from './modules/auth/login-form/login-form.component';
import { RegisterComponent } from './modules/auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/pokemons/pokemons.module').then(
        (m) => m.PokemonsModule
      ),
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'pokedex',
    loadChildren: () =>
      import('./modules/pokemons/pokemons.module').then(
        (m) => m.PokemonsModule
      ),
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'pokemon/:name',
    component: PokemonInfoComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'signup',
    component: RegisterComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
