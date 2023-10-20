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

                {
                    brand[0].products.length > 0 ?
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 pb-6">
                            {brand[0].products.map(item => <ProductCard key={item._id} item={item} />)}
                        </div> :
                        <div className="px-6 pb-6 mt-6 flex w-full h-full min-h-[50dvh] justify-center items-start container mx-auto flex-col gap-4">
                            <h3 className="font-semibold text-xl bg-yellow-300 p-12 rounded-lg shadow-lg"><span className="text-4xl">🫥</span> Hmm</h3>
                            <h3 className="font-semibold text-xl bg-white p-12 rounded-lg shadow-lg">There is no items in here.</h3>
                        </div>
                }


            </div>
            <Footer />
        </>
    );
}

export default BrandHome;