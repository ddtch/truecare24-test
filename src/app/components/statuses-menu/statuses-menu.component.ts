import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, ElementRef, HostListener} from '@angular/core';
import {ProviderStatusTypes} from '../../models/ProviderStatusTypes';

@Component({
  selector: 'app-statuses-menu',
  templateUrl: './statuses-menu.component.html',
  styleUrls: ['./statuses-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusesMenuComponent implements OnInit {
  @Input()
  public status: number;
  public statuses = [
    ProviderStatusTypes.Contacting,
    ProviderStatusTypes.TalkedToClient,
    ProviderStatusTypes.AssessmentScheduled,
    ProviderStatusTypes.ContractSigned,
    ProviderStatusTypes.Cancel
  ];
  @Output()
  public statusSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  public onStatusSelected(status: ProviderStatusTypes) {
    this.statusSelected.emit(status);
  }

  public calcTopPosition() {
    return (this.status ? -((this.status * 40) + 7) : -7) + 'px';
  }
}
