import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from '@/App';

// Mock SignUp component to avoid Supabase dependency in tests
vi.mock('@/components/SignUp', () => ({ default: () => <div>SignUp</div> }));

// jsdom doesn't implement scrollTo, so mock it for tests
window.scrollTo = vi.fn();

describe('App router', () => {
  const renderWithPath = (path: string) => {
    window.history.pushState({}, '', path);
    return render(<App />);
  };

  it('renders home page at root path', () => {
    renderWithPath('/');
    // Header is present on home
    expect(screen.getByRole('link', { name: /pitch/i })).toBeInTheDocument();
  });

  it('displays illustrative data notice on home page', () => {
    renderWithPath('/');
    expect(
      screen.getByText(
        'Data on this page is illustrative only. This project is still in concept stage.'
      )
    ).toBeInTheDocument();
  });

  it('renders Pitch page', () => {
    renderWithPath('/pitch');
    expect(screen.getByText(/The Challenge/i)).toBeInTheDocument();
  });

  it('renders Whitepaper page', () => {
    renderWithPath('/whitepaper');
    expect(screen.getByTitle(/SolarVillage Whitepaper/i)).toBeInTheDocument();
  });

  it('renders NotFound for invalid routes', () => {
    renderWithPath('/does-not-exist');
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
