
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [darkmode, setdarkmode] = useState(false)
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproduct">Add Product</NavLink></li>
        <li><NavLink to="/mycart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    const toggledarkmode = () => {
        if (darkmode) {
            localStorage.setItem("darkmode", "false")
            document.querySelector("body").removeAttribute("darkmode")
        } else {
            localStorage.setItem("darkmode", "true")
            document.querySelector("body").setAttribute("darkmode","true")
        }
        setdarkmode(!darkmode)
        console.log(darkmode)
    }
    useEffect(
        () => {
            const isdarkmodeon = localStorage.getItem("darkmode") === "true"
            document.querySelector(".darkmodetoggle").checked = isdarkmodeon
            document.querySelector("body").setAttribute("darkmode",localStorage.getItem("darkmode"))
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
                <NavLink to="/" className="hover:bg-white rounded-lg font-semibold text-xl items-center gap-2 transition-all hidden w-max absolute left-1/2 -translate-x-1/2 justify-center md:flex xl:text-2xl px-4 py-2 cursor-pointer">
                    <img src="/logo2.png" className="lg:h-28" alt="" />
                    <h2>Food Group Center</h2>
                </NavLink>
                <div>
                    <h2 className="font-semibold">User</h2>
                    <input type="checkbox" onClick={toggledarkmode} className="toggle toggle-warning darkmodetoggle" />
                </div>
            </div>
        </div>
    );
}

export default NavBar;