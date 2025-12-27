import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Diag from '@/pages/Diag';

describe('Diagnostics page', () => {
  beforeEach(() => {
    const response = {
      ok: true,
      status: 200,
      statusText: 'OK',
    } as Response;
    global.fetch = vi.fn().mockResolvedValue(response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders diagnostics details and fetch checks', async () => {
    render(<Diag />);

    expect(
      screen.getByRole('heading', { name: /diagnostics/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/User Agent/i)).toBeInTheDocument();

    const okResponses = await screen.findAllByText('OK (200)');
    expect(okResponses).toHaveLength(2);
  });
});
