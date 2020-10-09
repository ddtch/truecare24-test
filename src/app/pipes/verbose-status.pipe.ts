import { Pipe, PipeTransform } from '@angular/core';
import {ProviderStatusTypes} from '../models/ProviderStatusTypes';

@Pipe({
  name: 'verboseStatus'
})
export class VerboseStatusPipe implements PipeTransform {

  transform(value: ProviderStatusTypes, ...args: any[]): any {
    switch (value) {
      case ProviderStatusTypes.Contacting:
        return 'Contacting';
      case ProviderStatusTypes.TalkedToClient:
        return 'Talked to the client';
      case ProviderStatusTypes.AssessmentScheduled:
        return 'Assessment scheduled';
      case ProviderStatusTypes.ContractSigned:
        return 'Contract signed';
      case ProviderStatusTypes.Cancel:
        return 'Cancel the client';
    }
  }

}
