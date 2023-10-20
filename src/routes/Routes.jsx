import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../home/Home";
import AddProduct from "../addProduct/AddProduct";
import MyCart from "../myCart/MyCart";
import ErrorPage from "../errorpage/ErrorPage";
import Login from "../login/Login";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../login/SignUp";

const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element: <Root />,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct/></PrivateRoute>,
      },
      {
        path: "/mycart",
        element: <MyCart/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
    ]
  },
]);
export default Routes;