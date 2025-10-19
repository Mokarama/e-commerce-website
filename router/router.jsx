import {
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../src/Pages/Home/Home/Home";
import WomansProducts from "../src/Pages/Home/Banner/WomansProducts";
import MansProducts from "../src/Pages/Home/Banner/MansProducts";
import ElectronicsProducts from "../src/Pages/Home/Banner/ElectronicsProducts";
import MedicinesProducts from "../src/Pages/Home/Banner/MedicinesProducts";
import HomeLifestyleProducts from "../src/Pages/Home/Banner/HomeLifestyleProducts";
import SportsOutdoorProducts from "../src/Pages/Home/Banner/SportsOutdoorProducts";
import BabyToysProducts from "../src/Pages/Home/Banner/BabyToysProducts";
import GroceriesPetsProducts from "../src/Pages/Home/Banner/GroceriesPetsProducts";
import HealthBeautyProducts from "../src/Pages/Home/Banner/HealthBeautyProducts";


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
        },
        {
          path:"/electronics",
          Component:ElectronicsProducts,
        },
         {
          path:"/home-lifestyle",
          Component:HomeLifestyleProducts,
        }
        ,
        {
          path:"/medicine",
          Component:MedicinesProducts,
        },
       {
          path:"/sports-outdoor",
          Component:SportsOutdoorProducts,
        },
        {
          path:"/baby-s-toys",
          Component:BabyToysProducts,
        },
        {
          path:"/groceries-pets",
          Component:GroceriesPetsProducts,
        },
        {
          path:"/health-beauty",
          Component:HealthBeautyProducts,
        },
        



    

    ]
    
  },
]);

export default router;