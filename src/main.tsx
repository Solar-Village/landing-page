import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { handleInitialRedirect } from './redirect';

handleInitialRedirect();
createRoot(document.getElementById('root')!).render(<App />);
