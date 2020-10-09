import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from './components/components.module';
import {RouterModule} from '@angular/router';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: PlaceholderComponent
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
