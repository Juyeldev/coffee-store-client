import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddChocolate from './component/AddChocolate.jsx';
import UpdateChocolate from './component/UpdateChocolate.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/chocolate')
  
  },
  {
    path: "/addChocolate",
    element: <AddChocolate></AddChocolate>
  },
  {
    path: "/updateChocolate/:id",
    element: <UpdateChocolate></UpdateChocolate>,
    loader: ({params})=> fetch(`http://localhost:5000/chocolate/${params.id}`)
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
