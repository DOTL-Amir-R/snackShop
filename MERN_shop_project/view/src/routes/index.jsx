import { Header } from "../layout/core/header";
import { Home } from "../page/home";
import { SignUp } from "../page/signup";
import Login from "../page/login";

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
    }
}