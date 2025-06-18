import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/variables.css';
import '../styles/base.css';
import { RouterProvider } from 'react-router';
import { router } from '../routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
