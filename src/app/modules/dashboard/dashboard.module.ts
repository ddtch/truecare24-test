import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      }
    ])
  ]
})
export class DashboardModule {
}
