import React from 'react'
import './main.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>,
  },
  {
    path: "/Home",
    element: 
    <>
      <Header/>
      <div className='content-main'>Pagina inicial!</div>
      <Footer/>
    </>,
  },
  {
    path: "/Sobre",
    element:
    <>
      <Header/>
      <div className='content-main'>Sobre!</div>
      <Footer/>
    </>,
  },
  {
    path: "/Notícias",
    element: 
      <>
        <Header/>
        <div className='content-main'>Notícias!</div>
        <Footer/>
      </>,
  },

  {
    path: "/Contato",
    element: 
      <>
        <Header/>
        <div className='content-main'>Contato!</div>
        <Footer/>
      </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)