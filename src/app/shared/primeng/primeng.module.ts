import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    AvatarModule,
    InputSwitchModule,
    ButtonModule
  ],
  exports : [
    MenubarModule,
    AvatarModule,
    InputSwitchModule,
    ButtonModule
  ]
})
export class PrimengModule { }
