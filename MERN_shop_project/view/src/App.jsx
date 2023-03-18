import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/home";
import { routes } from "./routes";
import './layout/global/index.css'
import { useEffect } from "react";
import { mainInstance } from "./api/constants";
import Cookies from 'js-cookie'

export default function App() {
    const token = Cookies.get("token")
    useEffect(()=>{
        if (token) {
            mainInstance.defaults.headers.common['Authorization'] = token
          }
    },[token])
    console.log(token);
    return (
        <BrowserRouter>
        <Routes>
            {Object.keys(routes).map(item=>{
                return(
                    <Route id={routes[item].id} path={routes[item].path} element={routes[item].element} />
                )
            })}
            
        </Routes>
        </BrowserRouter>

    )
  }