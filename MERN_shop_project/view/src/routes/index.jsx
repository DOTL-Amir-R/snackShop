import { Header } from "../layout/core/header";
import { Home } from "../page/home";
import { SignUp } from "../page/signup";
import Login from "../page/login";
import Shop from "../page/shop";
import Product from "../page/product";
import { Basket } from "../page/basket";
import { SellYourProduct } from "../page/sellYourProduct";
import About from "../page/about";

export const routes = {
    home:{
        id:'1',
        path:'/',
        element:<Home/>
    },
    signIn:{
        id:'2',
        path:'/signup',
        element:<SignUp/>
    },
    login:{
        id:"3",
        path:'/login',
        element:<Login/>
    },
    shop:{
        id:"4",
        path:'/shop',
        element:<Shop/>,
    },
    product:{
        id:"5",
        path:"/shop/:id",
        element:<Product/>
    },
    basket:{
        id:"6",
        path:"/basket",
        element:<Basket/>
    },
    sellYourProduct:{
        id:'7',
        path:'/sellyourproduct',
        element:<SellYourProduct/>
    },
    about:{
        id:"6",
        path:"/about",
        element:<About/> 
    }
}