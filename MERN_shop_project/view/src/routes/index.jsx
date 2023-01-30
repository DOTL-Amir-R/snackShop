import { Header } from "../layout/core/header";
import { Home } from "../page/home";

export const routes = {
    home:{
        id:'1',
        path:'/',
        element:<Home/>
    },
    signIn:{
        id:'2',
        path:'/signin',
        element:<Header/>
    },
}