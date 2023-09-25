import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { InputSwitchModule } from 'primeng/inputswitch';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    AvatarModule,
    InputSwitchModule
  ],
  exports : [
    MenubarModule,
    AvatarModule,
    InputSwitchModule
  ]
})
export class PrimengModule { }
