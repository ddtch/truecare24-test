import {ProviderStatusTypes} from './ProviderStatusTypes';

export interface ProviderModel {
  id: number;
  individual: boolean;
  contracted: boolean;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status?: ProviderStatusTypes;
}
