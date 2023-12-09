import { useEffect } from "react";
import Footer from "../components/Footer";
import { useLoaderData, useNavigate } from "react-router-dom";
import BrandItem from "./BrandItem";

const Home = () => {
    const brands = useLoaderData()

    const navigate = useNavigate();

    useEffect(() => {
        if (brands && Array.isArray(brands) && brands.length) {

        } else {
            navigate('/error',{state:{id:1,errormessage:'server is down, pleasewait & refresh the page'}});
        }
    }, [])
    return (
        <>
            <div className="container mx-auto p-6 md:p-0">
                <div className="w-full mt-4 flex items-end" data-aos="fade-right">
                    <img src="https://i.ibb.co/SstYKt6/banner-home.jpg" className="object-cover w-full md:aspect-[3/1] aspect-[2/1] overflow-hidden rounded-lg" alt="" />
                    <div className="absolute m-2 mr-6 gap-2 flex flex-col">
                        <h2 className="bg-yellow-400 text-xl md:text-3xl xl:text-4xl rounded-md py-1 px-2 lg:py-2 lg:px-4 md:mr-32 w-max">Enjoy The Foods That You Love!</h2>
                        <h4 className="bg-yellow-400 rounded-md py-1 font-semibold px-2 mr-[10dvh] text-xs md:text-sm lg:text-base md:mr-32">Fast food and cold drinks that will make you come back for more. Designed to satisfy your cravings. Whether you’re in the mood for a burger, fries, or a refreshing drink, we’ve got you covered</h4>
                    </div>
                </div>

                <div className="container mx-auto flex flex-col items-center justify-center gap-4 my-16">
                        <h2 className="bg-white text-xl md:text-3xl xl:text-4xl rounded-md py-1 px-2 lg:py-2 lg:px-4 md:mx-32 shadow-lg w-max">Our Partner Brands</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
                    {
                        brands.map(
                            item => <BrandItem key={item._id} brand={item} />
                        )
                    }
                </div>
                <div className="container mx-auto flex flex-col items-center justify-center gap-4 my-16">
                        <h2 className="bg-yellow-400 text-xl md:text-3xl xl:text-4xl rounded-md py-1 px-2 lg:py-2 lg:px-4 md:mx-32 w-max">Quick Fact</h2>
                </div>
                <div className="w-full my-10 flex items-center justify-center" data-aos="fade-right">
                    <img src="https://i.ibb.co/FXgDWhS/facts.jpg" className="object-cover w-full md:aspect-[2/1] aspect-[2/1] overflow-hidden rounded-lg" alt="" />
                    <div className="absolute m-2 mr-6 gap-2 flex flex-col justify-center items-center">
                        <h2 className="bg-white text-xl md:text-3xl xl:text-4xl rounded-md py-1 px-2 lg:py-2 lg:px-4 md:mx-32 w-max">Did you know!</h2>
                        <h4 className="bg-white rounded-md py-1 font-semibold px-2 mr-[10dvh] text-xs md:text-sm lg:text-base md:mx-32">Sturbucks have over 1500 stores in America alone!</h4>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col items-center justify-center gap-4 my-16">
                        <h2 className="bg-yellow-400 text-xl md:text-3xl xl:text-4xl rounded-md py-1 px-2 lg:py-2 lg:px-4 md:mx-32 w-max">On Your Doorstep:</h2>
                </div>
                <div className="w-full mt-4 flex items-center justify-center" data-aos="fade-right">
                    <img src="https://i.ibb.co/SJspTLJ/fast-food.jpg" className="object-cover w-full md:aspect-[3/1] aspect-[2/1] overflow-hidden rounded-lg" alt="" />
                    <div className="absolute m-2 mr-6 gap-2 flex flex-col justify-center items-center">
                        <h2 className="bg-yellow-400 text-xl md:text-3xl xl:text-4xl rounded-md py-1 px-2 lg:py-2 lg:px-4 md:mx-32 w-max">Awesome taste That will never leave you!</h2>
                        <h4 className="bg-yellow-400 rounded-md py-1 text-center px-2 mr-[10dvh] text-xs md:text-sm lg:text-base md:mx-32">Fast food and cold drinks that will make you come back for more. Designed to satisfy your cravings. Whether you’re in the mood for a burger, fries, or a refreshing drink, we’ve got you covered</h4>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Home;