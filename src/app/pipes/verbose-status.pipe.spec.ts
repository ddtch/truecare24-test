import { VerboseStatusPipe } from './verbose-status.pipe';

describe('VerboseStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new VerboseStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
