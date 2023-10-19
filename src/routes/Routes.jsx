import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../home/Home";
import AddProduct from "../addProduct/AddProduct";
import MyCart from "../myCart/MyCart";
import ErrorPage from "../errorpage/ErrorPage";

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
        element: <AddProduct/>,
      },
      {
        path: "/mycart",
        element: <MyCart/>,
      },
    ]
  },
]);
export default Routes;