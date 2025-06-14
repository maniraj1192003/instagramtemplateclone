import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom'; // changed from createBrowserRouter
import Viewstory from './Viewstory';
import Profile from './Profile';

// Use createHashRouter for GitHub Pages
const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/stories/:id/:tot',
    element: <Viewstory />
  },
  {
    path: '/profile',
    element: <Profile />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
