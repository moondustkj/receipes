import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page1 from './components/Page1';
import { store } from './store';
import { Provider } from 'react-redux';
import RecipeDetail from './components/RecipeDetail';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, {
    path: '/page1',
    element: <Page1 />
  }, {
    path: '/recipe/:id',
    element: <RecipeDetail />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
