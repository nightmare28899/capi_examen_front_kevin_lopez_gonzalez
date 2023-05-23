import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: TableUsuariosComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
