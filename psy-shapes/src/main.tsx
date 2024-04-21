import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Square from './pages/square/square.tsx';
import Circle from './pages/circle/circle.tsx';
import Triangle from './pages/triangle/triangle.tsx';
import Rectangle from './pages/rectangle/rectangle.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/square',
        element: <Square />
      },
      {
        path: '/circle',
        element: <Circle />
      },
      {
        path: '/triangle',
        element: <Triangle />
      },
      {
        path: '/rectangle',
        element: <Rectangle />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
