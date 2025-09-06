import { describe, it, expect, vi } from 'vitest';
import { handleInitialRedirect } from '../redirect';

describe('handleInitialRedirect', () => {
  it('replaces history when redirect param is present', () => {
    const replaceSpy = vi.spyOn(window.history, 'replaceState');
    const fakeLocation = { search: '?redirect=/pitch' } as Location;
    handleInitialRedirect(fakeLocation);
    expect(replaceSpy).toHaveBeenCalledWith(null, '', '/pitch');
    replaceSpy.mockRestore();
  });

  it('does nothing without redirect param', () => {
    const replaceSpy = vi.spyOn(window.history, 'replaceState');
    const fakeLocation = { search: '' } as Location;
    handleInitialRedirect(fakeLocation);
    expect(replaceSpy).not.toHaveBeenCalled();
    replaceSpy.mockRestore();
  });
});
