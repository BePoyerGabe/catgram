import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [   // children elementos de subrotas, irá carregar componentes no outlet a partir de home e não da raiz principal
    {
      path: '',
      component: LoginComponent
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
