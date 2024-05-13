
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { ProductDetail } from "./pages/Detail";

import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/product/:id",
        element: <ProductDetail/>
      }
    ]
  }
])

export { router }