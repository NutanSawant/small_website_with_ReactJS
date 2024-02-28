import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Data from './Components/data/Data.jsx'
import Api, { infoLoader } from './Components/Api/Api'
// import Layout from './components/Layout/Layout.jsx'
// import About from './components/About/About.jsx'
// import Home from './components/Home/Home.jsx'
// import { Children } from 'react'
// import Contact from './components/Contact/Contact.jsx'
// import Data from './components/Data/Data.jsx'
// const router =  createBrowserRouter([
//   {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'/',
//       element:<Home/>},
      
//       {
//       path:'/about',
//       element:<About/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//         },
//         {
//           path:'/data',
//           element:<Data/>
//           }
//   ]
//   }
//   ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='User/:uid' element={<Data/>}/>
      {/* <Route path='api' element={<Api/>}/> */}
      <Route loader={infoLoader} path='api' element={<Api/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)