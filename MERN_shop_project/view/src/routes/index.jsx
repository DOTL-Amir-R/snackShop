import { Header } from "../layout/core/header";
import { Home } from "../page/home";
import { SignUp } from "../page/signup";
import Login from "../page/login";
import Shop from "../page/shop";

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
    }
}