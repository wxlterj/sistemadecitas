import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresarGuard } from './ingresar.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresarGuard]
  },
  {
    path: 'agendacita',
    loadChildren: () => import('./agendacita/agendacita.module').then( m => m.AgendacitaPageModule),
    canActivate: [IngresarGuard]
  },
  {
    path: 'confcita',
    loadChildren: () => import('./confcita/confcita.module').then( m => m.ConfcitaPageModule),
    canActivate: [IngresarGuard]
  },
  {
    path: 'cancelarcita',
    loadChildren: () => import('./cancelarcita/cancelarcita.module').then( m => m.CancelarcitaPageModule),
    canActivate: [IngresarGuard]
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule),
    canActivate: [IngresarGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
