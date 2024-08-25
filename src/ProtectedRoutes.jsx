import { Outlet, Navigate } from "react-router-dom";
import {auth} from './Config/firebase.js'

const ProtectedRoutes = () =>{
    const user = auth?.currentUser?.email

    return (user!=undefined) ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoutes