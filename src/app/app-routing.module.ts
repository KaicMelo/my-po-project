import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accordion',
  },
  {
    path: 'accordion',
    loadChildren: () =>
      import('./routes/accordion/accordion.module').then(
        (m) => m.AccordionModule
      ),
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./routes/avatar/avatar.module').then((m) => m.AvatarModule),
  },
  {
    path: 'breadcrumb',
    loadChildren: () =>
      import('./routes/breadcrumb/breadcrumb.module').then((m) => m.BreadcrumbModule),
  },
  {
    path: 'po-button',
    loadChildren: () =>
      import('./routes/button/button.module').then((m) => m.ButtonModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
