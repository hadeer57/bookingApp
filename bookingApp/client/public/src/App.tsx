import React from "react";
import "./Style.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import {useJsApiLoader,} from "@react-google-maps/api";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleMap from "./pages/GoogleMAp";
import Hotels from "./pages/Hotels";
import Resturants from "./pages/Resturants";
import Attractions from "./pages/Attractions";
import Nature from "./pages/Nature";

function Layout(){
  return(
    <>
    <Navbar/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

const router = createBrowserRouter([
//   {
//   path: "/",
//   element: <Navbar/>,
//   children:[
//     {
//       {
//         path: "/?cat=hotels",
//         element: <Hotels/>,
//       },  
//     }
//   ]
// },
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/post/:id",
        element: <Post/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
      {
        path:"/hotels",
        element:<Hotels/>
      },
      {
        path:"/resturants",
        element:<Resturants/>
      },
      {
        path:"/attractions",
        element:<Attractions/>
      },  {
        path:"/Nature",
        element:<Nature/>
      }
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/map",
    element: <GoogleMap />,
  },

]);



function App() {
  return (
    <div className="App">
      <div className="appWrapper">
          <RouterProvider router={router} />
          </div>
    </div>
  );
}

export default App;



