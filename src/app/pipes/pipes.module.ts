import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerboseStatusPipe } from './verbose-status.pipe';

@NgModule({
  declarations: [
    VerboseStatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VerboseStatusPipe
  ]
})
export class PipesModule { }
