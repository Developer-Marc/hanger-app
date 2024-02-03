import { Outlet, Navigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
    const { isAuthenticated } = useAuth0();
    const { isGuest } = useSelector((state) => state.user);
    return(
        isAuthenticated || isGuest ? <Outlet/> : <Navigate to="/"/>
    )
}

export default ProtectedRoutes