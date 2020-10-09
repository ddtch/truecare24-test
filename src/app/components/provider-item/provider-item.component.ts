import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {ProviderModel} from '../../models/ProviderModel';

@Component({
  selector: 'app-provider-item',
  templateUrl: './provider-item.component.html',
  styleUrls: ['./provider-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderItemComponent implements OnInit {
  @Input()
  public provider: ProviderModel;

  constructor() { }

  ngOnInit() {
  }

}
