import { Footer } from "../../layout/core/footer"
import { Header } from "../../layout/core/header"
import Main from "./Main"

export function Home() {
    return(
        <div>
            <div><Header/></div>
            <Main/>
            <div><Footer/></div>
        </div>
    )    
}