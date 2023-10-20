import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import ProductCard from "./productCard";

const BrandHome = () => {
    const brand = useLoaderData()
    return (
        <div className="container mx-auto">
            {brand.length && <Slider items={brand[0].ads} />}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 pb-6">
                { brand.length && brand[0].products.map( item=> <ProductCard key={item._id} item={item} />)}
            </div>
        </div>
    );
}

export default BrandHome;