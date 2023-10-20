
import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [darkmode, setdarkmode] = useState(false)
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproduct">Add Product</NavLink></li>
        <li><NavLink to="/mycart">My Cart</NavLink></li>
        <li><NavLink to="/login" state={location?.state ? location.state : "/"}>Login</NavLink></li>
    </>
    const toggledarkmode = () => {
        if (darkmode) {
            localStorage.setItem("darkmode", "false")
            document.querySelector("body").removeAttribute("darkmode")
        } else {
            localStorage.setItem("darkmode", "true")
            document.querySelector("body").setAttribute("darkmode", "true")
        }
        setdarkmode(!darkmode)
    }
    useEffect(
        () => {
            const isdarkmodeon = localStorage.getItem("darkmode") === "true"
            document.querySelector(".darkmodetoggle").checked = isdarkmodeon
            document.querySelector("body").setAttribute("darkmode", localStorage.getItem("darkmode"))
            setdarkmode(isdarkmodeon)

        }, []
    )
    return (
        <div className="bg-yellow-400 p-6 min-h-[150px] flex flex-col md:flex-row items-center text-center">
            <NavLink to="/" className="hover:bg-white rounded-lg mx-auto font-semibold text-base items-center gap-2 transition-all md:hidden w-max justify-center flex px-4 py-2 cursor-pointer">
                <img src="/logo2.png" className="h-14" alt="" />
                <h2>Food Group Center</h2>
            </NavLink>
            <div className="container mx-auto flex items-center w-full justify-between">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        {links}
                    </ul>
                </div>
                <ul className="menu menu-horizontal px-1 gap-2 lg:flex hidden">
                    {links}
                </ul>
                {   user ?
                    <NavLink to="/" className="hover:bg-white rounded-lg font-semibold text-xl items-center gap-2 transition-all hidden w-max absolute left-1/2 -translate-x-1/2 justify-center lg:flex xl:text-2xl px-4 py-2 cursor-pointer">
                        <img src="/logo2.png" className="lg:h-28" alt="" />
                        <h2>Food Group Center</h2>
                    </NavLink>:
                    <NavLink to="/" className="hover:bg-white rounded-lg font-semibold text-xl items-center gap-2 transition-all hidden w-max absolute left-1/2 -translate-x-1/2 justify-center md:flex xl:text-2xl px-4 py-2 cursor-pointer">
                        <img src="/logo2.png" className="lg:h-28" alt="" />
                        <h2>Food Group Center</h2>
                    </NavLink>
                }
                <div>
                    <div className="flex gap-4 text-lg items-center text-right">
                        <div>
                            <div className="flex items-center justify-end gap-2 text-right">
                                <span className="text-sm font-semibold">Dark-mode</span>
                                <input type="checkbox" name="drktgl" onClick={toggledarkmode} className="toggle toggle-xs toggle-warning darkmodetoggle" />
                            </div>
                            <div className="flex justify-end text-right gap-2 items-center">
                                {user ? <NavLink onClick={logOut} className="bg-red-500 px-2 py-1 text-white/70 text-xs rounded-md hover:bg-red-300 transition-all">Sign Out</NavLink> :
                                    <>
                                        <NavLink onClick={logOut} className="bg-red-500 px-2 py-1 text-white/70 text-xs rounded-md hover:bg-red-300 transition-all" to="/login" state={location?.state ? location.state : "/"}>Sign In</NavLink>
                                        <NavLink onClick={logOut} className="bg-red-500 px-2 py-1 text-white/70 text-xs rounded-md hover:bg-red-300 transition-all" to="/signup" state={location?.state ? location.state : "/"}>Sign Up</NavLink>
                                    </>}
                                {user && user.displayName ? <h2>{user.displayName}</h2> : <h2>No Name</h2>}</div>
                            <div className="text-xs text-white/70 bg-red-500 px-2 py-1">{user ? user.email : "Not Logged In"}</div>
                        </div>
                        <div>{user ? user.photoURL ? <img src={user.photoURL} className="w-20 h-20 object-cover overflow-hidden aspect-square rounded-lg" alt="" /> : <img className="w-20 h-20 object-cover overflow-hidden aspect-square rounded-lg" src="https://i.ibb.co/sKbWp7W/21104.jpg" alt="" /> : <></>}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;