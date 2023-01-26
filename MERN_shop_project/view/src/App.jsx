import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/home";
import { routes } from "./routes";

export default function App() {
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