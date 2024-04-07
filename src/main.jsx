import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Posts from './components/Posts';
import PostDetais from './components/PostDetais';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      
     
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/posts",
          loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetais></PostDetais>,
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
