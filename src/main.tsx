import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './404.tsx'
import AppContextData from './contexts/AppContextData.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextData>
      <RouterProvider router={router} />
    </AppContextData>
  </React.StrictMode>,
)
