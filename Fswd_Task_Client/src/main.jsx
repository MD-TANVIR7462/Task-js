import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeMain from './Components/HomeComponents/HomeMain/HomeMain.jsx';
import ShopMain from './Components/ShopPageComponents/ShopMain/ShopMain.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<HomeMain></HomeMain>
      },
      {
        path:"/shop/:category",
        element:<ShopMain></ShopMain>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
