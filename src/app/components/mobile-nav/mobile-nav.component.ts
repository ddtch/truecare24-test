import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {SidenavComponent} from '../sidenav/sidenav.component';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNavComponent extends SidenavComponent implements OnInit {
  public showNav: boolean;
  public isClosing: boolean;

  public toggleMobileNav() {
    this.isClosing = this.showNav;
    this.showNav = !this.showNav;
  }

}
