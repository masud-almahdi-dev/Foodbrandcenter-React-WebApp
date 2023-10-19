import { Outlet } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Root = () => {
    useEffect(() => {
        Aos.init(
            {duration: 1200}
        );
      }, [])
    return ( 
        <div>
            <Outlet/>
        </div>
     );
}
 
export default Root;