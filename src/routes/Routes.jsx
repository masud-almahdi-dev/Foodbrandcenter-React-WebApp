import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../home/Home";
import AddProduct from "../addProduct/AddProduct";
import MyCart from "../myCart/MyCart";
import ErrorPage from "../errorpage/ErrorPage";
import Login from "../login/Login";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../login/SignUp";
import BrandHome from "../brand/BrandHome";
import ProductDetails from "../productDetails/ProductDetails";
import UpdateInfo from "../updateproduct/UpdateInfo";

const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`https://server-khaki-tau.vercel.app/brands`)
      },
      {
        path: "/error",
        element: <ErrorPage />
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct /></PrivateRoute>,
        loader: () => fetch(`https://server-khaki-tau.vercel.app/brands`)
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart /></PrivateRoute>,
        loader: () => fetch(`https://server-khaki-tau.vercel.app/products`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/brand/:id",
        element: <PrivateRoute><BrandHome /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-khaki-tau.vercel.app/brand/${params.id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          }
        })
      },
      {
        path: "/product/:id",
        element: <PrivateRoute><ProductDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-khaki-tau.vercel.app/product/${params.id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          }
        })
      },
      {
        path: "/updateproduct/:id",
        element: <PrivateRoute><UpdateInfo /></PrivateRoute>,
        loader: ({ params }) => {
          return Promise.all([
            fetch(`https://server-khaki-tau.vercel.app/product/${params.id}`, {
              method: "GET",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              }
            }),
            fetch(`https://server-khaki-tau.vercel.app/brands`, {
              method: "GET",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              }
            })
          ]
          )
        }
      },
    ]
  },
]);
export default Routes;