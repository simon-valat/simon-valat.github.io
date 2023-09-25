import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage : 'fr',
    }),
    FontAwesomeModule
  ],
  exports:
  [
    PrimengModule,
    FormsModule,
    TranslateModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
