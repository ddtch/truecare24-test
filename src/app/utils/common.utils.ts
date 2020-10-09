import {ProviderStatusTypes} from '../models/ProviderStatusTypes';

export const verboseStatusType = (statusType: ProviderStatusTypes) => {
  switch (statusType) {
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
};
