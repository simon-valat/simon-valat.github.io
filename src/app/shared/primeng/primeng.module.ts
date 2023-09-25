import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    AvatarModule,
    InputSwitchModule,
    ButtonModule,
    ChartModule,
    CardModule
  ],
  exports : [
    MenubarModule,
    AvatarModule,
    InputSwitchModule,
    ButtonModule,
    ChartModule,
    CardModule
  ]
})
export class PrimengModule { }
