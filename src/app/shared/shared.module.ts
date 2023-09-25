import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage : 'fr',
    }),
  ],
  exports:
  [
    PrimengModule,
    FormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
