import { useLocation , Navigate , Outlet } from "react-router-dom";
import { useAuth } from "./Auth";
const RequireAuth = ({ children })=>{
    const auth = useAuth()
    const location = useLocation()
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"))
    return (
        auth?.user || userFromLocalStorage?.token ? children:<Navigate to={"/login"} state={{from:location}} replace/>
    )
}
export default RequireAuth