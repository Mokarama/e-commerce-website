import {
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../src/Pages/Home/Home/Home";
import WomansProducts from "../src/Pages/Home/Banner/WomansProducts";
import MansProducts from "../src/Pages/Home/Banner/MansProducts";


const router=createBrowserRouter([
  {
    path:"/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
         path:"/woman-s-fashion",
         Component:WomansProducts,
        },
        {
          path:"/men-s-fashion",
          Component:MansProducts,
        }

    ]
    
  },
]);

export default router;