import { useLoaderData, useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import ProductCard from "./productCard";
import { useEffect } from "react";
import Footer from "../components/Footer";

const BrandHome = () => {
    const brand = useLoaderData()
    const navigate = useNavigate()
    useEffect(() => {
        if (brand && Array.isArray(brand) && brand.length) {

        } else {
            navigate("/error")
        }
    }, [])
    return (
        <>
            <div className="container mx-auto" data-aos="fade-right">
                {brand.length && <Slider items={brand[0].ads} />}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 pb-6">
                    {brand.length && brand[0].products.map(item => <ProductCard key={item._id} item={item} />)}
                </div>

            </div>
            <Footer />
        </>
    );
}

export default BrandHome;