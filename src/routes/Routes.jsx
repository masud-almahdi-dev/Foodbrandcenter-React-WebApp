import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
    ]
  },
]);
export default Routes;