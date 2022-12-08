import { BreadcrumbRoutingModule } from './breadcrumb-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { PoBreadcrumbModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbRoutingModule,
    PoBreadcrumbModule
  ]
})
export class BreadcrumbModule { }
