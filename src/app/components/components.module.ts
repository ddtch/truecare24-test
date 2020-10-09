import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavComponent} from './sidenav/sidenav.component';
import {HeaderComponent} from './header/header.component';
import {RouterTestingModule} from '@angular/router/testing';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { ProviderItemComponent } from './provider-item/provider-item.component';
import {RouterModule} from '@angular/router';
import { StatusesMenuComponent } from './statuses-menu/statuses-menu.component';
import {PipesModule} from '../pipes/pipes.module';
import {DirectivesModule} from '../directives/directives.module';
import { KebabMenuComponent } from './kebab-menu/kebab-menu.component';
import { FeedbackModalComponent } from './feedback-modal/feedback-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {MobileNavComponent} from './mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    ProvidersListComponent,
    ProviderItemComponent,
    StatusesMenuComponent,
    KebabMenuComponent,
    FeedbackModalComponent,
    StarRatingComponent,
    MobileNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    DirectivesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    SidenavComponent,
    HeaderComponent,
    ProvidersListComponent,
    ProviderItemComponent,
    StatusesMenuComponent,
    KebabMenuComponent,
    FeedbackModalComponent,
    StarRatingComponent,
    MobileNavComponent,
  ]
})
export class ComponentsModule { }
