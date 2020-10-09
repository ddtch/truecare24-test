import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProviderOptionTypes} from '../../models/ProviderOptionTypes';

@Component({
  selector: 'app-kebab-menu',
  templateUrl: './kebab-menu.component.html',
  styleUrls: ['./kebab-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KebabMenuComponent implements OnInit {
  public menuItems = [
    {
      title: 'Send intro',
      type: ProviderOptionTypes.intro
    },
    {
      title: 'Provide feedback',
      type: ProviderOptionTypes.feedback,
    },
    {
      title: 'Send reminder',
      type: ProviderOptionTypes.reminder
    },
    {
      title: 'Background check',
      type: ProviderOptionTypes.check
    }
  ];
  @Output()
  public optionSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public onOptionSelected(type: ProviderOptionTypes) {
    this.optionSelected.emit(type);
  }

}
