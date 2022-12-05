import { AvatarRoutingModule } from './avatar-routing.module';
import { PoAvatarModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';



@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    PoAvatarModule,
    AvatarRoutingModule
  ]
})
export class AvatarModule { }
