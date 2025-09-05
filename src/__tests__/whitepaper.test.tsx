import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

const mockedNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual: typeof import('react-router-dom') = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

import Header from '@/components/Header';
import Whitepaper from '@/pages/Whitepaper';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('includes Whitepaper link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const link = screen.getByRole('link', { name: /Whitepaper/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/whitepaper');
  });
});

describe('Whitepaper page', () => {
  it('renders PDF iframe and back button', () => {
    render(
      <BrowserRouter>
        <Whitepaper />
      </BrowserRouter>
    );
    expect(screen.getByTitle(/SolarVillage Whitepaper/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Back/i })).toBeInTheDocument();
  });

  it('back button navigates back', async () => {
    render(
      <BrowserRouter>
        <Whitepaper />
      </BrowserRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /Back/i }));
    expect(mockedNavigate).toHaveBeenCalledWith(-1);
  });
});
