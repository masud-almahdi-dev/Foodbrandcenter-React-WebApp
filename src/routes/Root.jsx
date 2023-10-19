import { Outlet } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import NavBar from "../navbar/NavBar";


const Root = () => {
    useEffect(() => {
        Aos.init(
            { duration: 1200 }
        );
    }, [])
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default Root;