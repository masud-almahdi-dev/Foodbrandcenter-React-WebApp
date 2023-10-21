import { useLoaderData, useNavigate } from "react-router-dom"
import { getCart } from "../utility/localStorage"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { removefromCart } from "../utility/localStorage";
import CartItem from "./CartItem"

const MyCart = () => {
    const [cartitems, setCartItems] = useState([])
    const allitems = useLoaderData()

    const navigate = useNavigate();

    useEffect(() => {
        if (allitems && Array.isArray(allitems)) {
            const res = getCart()
            if (allitems.length > 0) {
                let incart = []
                for (let id of res) {
                    for (let item of allitems) {
                        if (item._id === id) { incart.push(item) }
                    }
                }
                setCartItems(incart)
            }
        } else {
            navigate('/error',{state:{id:1,errormessage:'server is down, pleasewait & refresh the page'}});
        }

    }, [])
    const handleRemoveItem = (id) => {

        let result = removefromCart(id);
        if (result === "ok") {
            toast.success(<div className=' font-medium p-4 py-5'>Item Successfully Removed!</div>, {
                position: "bottom-right",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }

        setCartItems(cartitems.filter(item => !(item._id === id)))
    }
    return (
        <>
            <div className="flex flex-col items-center">
                {
                    cartitems.length > 0 ?
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 pb-6 mt-6">
                            {cartitems.map(item => <CartItem key={item._id} item={item} remover={() => { handleRemoveItem(item._id) }} />)}
                        </div>:
                        <div className="px-6 pb-6 mt-6 flex w-full h-full min-h-[50dvh] justify-center items-start container mx-auto flex-col gap-4">
                            <h3 className="font-semibold text-xl bg-yellow-300 p-12 rounded-lg shadow-lg"><span className="text-4xl">🫥</span> Hmm</h3>
                            <h3 className="font-semibold text-xl bg-white p-12 rounded-lg shadow-lg">There is no items in the cart</h3>
                        </div>

                    }
            </div>
            <ToastContainer />
            <Footer />
        </>
    );
}

export default MyCart;