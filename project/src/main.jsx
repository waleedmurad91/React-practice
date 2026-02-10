  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  import Layout from './components/Layout.jsx'
  import './index.css'
  import Home from './components/Home.jsx'
  import { Provider } from 'react-redux'
  import { store } from './Store/Store.js'
  import Services from './components/Services.jsx'
  import Work from './components/Work.jsx'
  import About from './components/About.jsx'
  import Contact from './components/Contact.jsx'


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"",
          element:<Home />
        },
        {
          path:"services",
          element:<Services/>
        },
        {
          path:"work",
          element:<Work/>
        },
        {
          path:"about",
          element:<About />
        },
        {
          path:"contact",
          element:<Contact />
        }
      ]
    }
  ])
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </StrictMode>,
  )
