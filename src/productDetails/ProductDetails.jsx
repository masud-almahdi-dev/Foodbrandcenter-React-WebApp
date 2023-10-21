import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addPurchaseToCart } from "../utility/localStorage";
import Footer from "../components/Footer";

const ProductDetails = () => {
    const product = useLoaderData()
    const navigate = useNavigate()
    useEffect(() => {
        if (product && Array.isArray(product) && product.length) {

        } else {
            navigate("/error")
        }
    }, [])
    const notify = () => {
        let result = addPurchaseToCart(product[0]._id);
        if (result === "ok") {
            toast.success(<div className=' font-medium p-4 py-5'>Added to cart!</div>, {
                position: "bottom-right",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        } else if (result === "already") {
            toast.info(<div className='p-4 py-5'>Already in cart!</div>, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }

    }
    return (
        <div className=''>
            <div className='container mx-auto p-6'>
                <div className='flex lg:flex-row flex-col' data-aos="fade-right">
                    <div className='rounded-lg overflow-hidden w-full'>
                        <img className="w-full h-full rounded-b-lg aspect-video object-cover" src={product[0].image ? product[0].image : "https://i.ibb.co/NZ6HDq5/box.jpg"} alt="logo" />
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className='mt-6 bg-gray-800 rounded-lg p-6'>
                        <h1 className='font-bold text-4xl text-white mb-6'>{product[0].title}</h1>
                        {product[0].details && <p className=' text-xs text-white w-full '>{product[0].details.length > 20 ? product[0].details.slice(0, 20) + "..." : product[0].details}</p>}
                    </div>
                    <div className=' mb-20 p-6 bg-yellow-400 -mt-2 text-black text-sm rounded-lg flex flex-col items-center shadow-lg' data-aos="fade-right">
                        {product[0].details || "No Details :)"}
                        <div className='flex items-center justify-center w-max gap-4 mt-4'>
                            <button className='px-6 py-4 hover:brightness-110 bg-red-500 transition-all duration-200 text-white rounded-md text-base lg:text-xl font-semibold' onClick={notify}>Add To Cart</button>
                            <h4 className='font-semibold'>Price: ${product[0].price.toFixed(2)}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <ToastContainer />
        </div>

    );
}

export default ProductDetails;