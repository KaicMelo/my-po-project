import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ButtonComponent,
  },
];
@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ButtonModule {}
