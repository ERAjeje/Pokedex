import { Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

export default ({ children }) => {
    return <BrowserRouter>
        <Route>
            {children}
        </Route>
    </BrowserRouter>
}