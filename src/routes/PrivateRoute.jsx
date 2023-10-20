import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return (
            <div className="w-full flex justify-center items-center py-10">
                <span className="loading loading-spinner text-warning"></span>
            </div>
        )
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
}
 
export default PrivateRoute;