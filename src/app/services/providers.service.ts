import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ProviderModel} from '../models/ProviderModel';
import {ProviderStatusTypes} from '../models/ProviderStatusTypes';

const mockProvidersList: ProviderModel[] = [
  {
    id: 7543,
    individual: true,
    contracted: true,
    avatar: '',
    firstName: 'Lucie',
    lastName: 'Munoz',
    email: 'oceane.torp@brennan.us',
    phone: '+1 (727) 809-1539',
    status: ProviderStatusTypes.Contacting,
  },
  {
    id: 9753,
    individual: true,
    contracted: true,
    avatar: '',
    firstName: 'Winifred',
    lastName: 'Henderson',
    email: 'landen_deckow@hotmail.com',
    phone: '+1 (532) 831-5321',
    status: ProviderStatusTypes.TalkedToClient,
  },
  {
    id: 3421,
    individual: true,
    contracted: false,
    avatar: '',
    firstName: 'Birdie',
    lastName: 'Carson',
    email: 'dietrich_amiya@yahoo.com',
    phone: '+1 (673) 223-7397',
    status: ProviderStatusTypes.AssessmentScheduled,
  },
  {
    id: 7675,
    individual: false,
    contracted: false,
    avatar: '',
    firstName: 'Family Care SF, Inc.',
    lastName: '',
    email: 'dorothy.lesch@dickinson.me',
    phone: '+1 (866) 124-5438',
    status: ProviderStatusTypes.ContractSigned,
  },
  {
    id: 5553,
    individual: true,
    contracted: true,
    avatar: '',
    firstName: 'Barry',
    lastName: 'Alexander',
    email: 'reilly.julius@gmail.com',
    phone: '+1 (885) 163-9766',
    status: ProviderStatusTypes.Cancel,
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor() { }

  public getProvidersList(): Observable<ProviderModel[]> {
    return of(mockProvidersList);
  }
}
