import React from 'react'
import ReactDOM from 'react-dom/client'

//dependencias do router para 'caminhar entre as paginas'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//importo as paginas
import Home from './routes/Home.jsx';
import Start from './routes/Start';
import Options from './routes/Options';

//crio um objeto que o 'Route Provider' ira interpretar como as paginas a serem caminhadas
//onde o path é o caminho da URL e o element é a pagina importada
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/start",
    element: <Start/>
  },
  {
    path: "/options",
    element: <Options/>
  },
]);


//aqui dentro chamamos o Route Provider com o nosso objeto
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
