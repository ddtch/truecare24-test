import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {ProviderModel} from '../../models/ProviderModel';
import {ProviderStatusTypes} from '../../models/ProviderStatusTypes';
import {ProviderOptionTypes} from '../../models/ProviderOptionTypes';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProvidersListComponent implements OnInit {
  @Input()
  public providers: ProviderModel[];
  public displayedColumns = ['Type', 'Name', 'Email', 'Phone', 'ID', 'Status'];
  public selectedProviderId: number;
  public showFeedbackModal: boolean;
  public showOptionsMenu: boolean;
  public showStatusMenu: boolean;

  constructor() { }

  ngOnInit() {
  }

  public openStatusMenu(event, providerId: number) {
    event.stopImmediatePropagation();
    this.showStatusMenu = true;
    this.selectedProviderId = providerId;
  }

  public openOptionsMenu(event, providerId: number) {
    event.stopImmediatePropagation();
    this.showOptionsMenu = true;
    this.selectedProviderId = providerId;
  }

  public doAction(option: ProviderOptionTypes) {
    switch (option) {
      case ProviderOptionTypes.feedback:
        this.openFeedbackModal();
        break;
      case ProviderOptionTypes.check:
        console.log('do check');
        break;
      case ProviderOptionTypes.intro:
        console.log('show intro');
        break;
      case ProviderOptionTypes.reminder:
        console.log('show reminder');
        break;
    }
    this.closeMenus();
  }

  public applyNewStatus(status: ProviderStatusTypes) {
    this.providers.map(el => {
      if (el.id === this.selectedProviderId) {
        el.status = status;
      }
      return el;
    });
    this.closeMenus();
  }

  public closeMenus(event?) {
    this.showOptionsMenu = false;
    this.showStatusMenu = false;
  }

  public onFeedbackModalClosed() {
    this.showFeedbackModal = false;
  }

  private openFeedbackModal() {
    this.showFeedbackModal = true;
    console.log('open feedback');
  }
}
