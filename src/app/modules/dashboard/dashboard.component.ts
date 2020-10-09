import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProvidersService} from '../../services/providers.service';
import {BehaviorSubject} from 'rxjs';
import {ProviderModel} from '../../models/ProviderModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public providersList: BehaviorSubject<ProviderModel[]> = new BehaviorSubject<ProviderModel[]>([]);

  constructor(private providersService: ProvidersService) { }

  ngOnInit() {
    this.getProviders();
  }

  private getProviders() {
    this.providersService.getProvidersList()
      .subscribe(data => this.providersList.next(data));
  }

}
