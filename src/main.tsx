import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';

import './root.css';
import '/src/services/auth/firebase';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
