import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },

  {
    path: 'data',
    loadChildren: () =>
      import('./pages/data/data.module').then((m) => m.DataModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
