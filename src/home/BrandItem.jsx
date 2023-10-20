import { NavLink } from "react-router-dom";

const BrandItem = ({brand}) => {
    const {_id,brandname,brandimage} = brand
    
    return ( 
        <NavLink to={`/brand/${_id}`} className="flex gap-2 bg-white flex-col items-center justify-center text-center hover:bg-yellow-400 aspect-square" data-aos="fade-right">
            <img src={brandimage} alt="" className="object-contain aspect-square w-1/2 mb-4" />
            {brandname}
        </NavLink>
     );
}
 
export default BrandItem;