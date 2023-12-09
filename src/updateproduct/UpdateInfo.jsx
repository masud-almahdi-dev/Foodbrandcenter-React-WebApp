import { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";

const UpdateInfo = () => {
    const { user } = useContext(AuthContext);
    const [currentbrand, setcurrentbrand] = useState("0")
    const [currenttype, setcurrenttype] = useState("0")
    const [productloaded, setproductloaded] = useState(false)
    const [product, setproduct] = useState([])
    const [brandsloaded, setbrandsloaded] = useState(false)
    const location = useLocation()
    const [brands, setbrands] = useState([])
    const loaded = useLoaderData()
    const navigate = useNavigate()
    const foodtypes = [{name:"Beverage"},{name:"Chickens & Fry"},{name:"Grocery"},{name:"Pizza"},{name:"Burger"},{name:"Others"}]
    
    useEffect(() => {
        if (productloaded && brandsloaded) {
        } else {
            loaded[0].json().then(data => { setproduct(data); setproductloaded(true) }, () => { })
            loaded[1].json().then(data => { setbrands(data); setbrandsloaded(true) }, () => { })
        }
    }, [])
    useEffect(() => {

        if (productloaded && brandsloaded) {
            if (product && Array.isArray(product) && product.length) {
                document.querySelector(`#update-form input[name="title"]`).value = product[0].title
                document.querySelector(`#update-form input[name="image"]`).value = product[0].image
                document.querySelector(`#update-form input[name="price"]`).value = product[0].price
                document.querySelector(`#update-form input[name="details"]`).value = product[0].details
                document.querySelector(`#update-form #product-rating #star-${product[0].rating}`).checked = true

                for (let i = 0; i < brands.length; i++) {
                    if (brands[i]._id == product[0].brand_id) {
                        document.querySelector("#brand-selector").value = String(i)
                        setcurrentbrand(String(i))
                        break;
                    }
                }
                for (let i = 0; i < foodtypes.length; i++) {
                    if (foodtypes[i].name == product[0].type.name) {
                        document.querySelector("#type-selector").value = String(i)
                        setcurrenttype(String(i))
                        break;
                    }
                }
            } else {
                navigate("/error")
            }
        }
    }, [productloaded, brandsloaded])


    const handleGotoDetails = () => {
        if (productloaded && brandsloaded) {
            navigate(`/product/${product[0]._id}`)
        }
    }

    const brandchange = e => {
        e.preventDefault();
        setcurrentbrand(e.target.value);
    }
    const typechange = e => {
        e.preventDefault();
        setcurrenttype(e.target.value);
    }
    const handleDelete = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://server-khaki-tau.vercel.app/delete/${product[0]._id}`, {
            method: "DELETE"
        }).then(res => {
            return navigate(`/brand/${product[0].brand_id}`)
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        let title = form.get('title')
        let image = form.get('image')
        let price = parseFloat(form.get('price'))
        let details = form.get('details')
        let ratingcontainer = document.querySelector("#product-rating")
        let type = foodtypes[currenttype]
        let rating = 4
        for (let i = 0; i < ratingcontainer.children.length; i++) {
            if (ratingcontainer.children[i].checked) {
                rating = i
                break
            }
        }
        let brand_id = brands[currentbrand]._id
        let pr = { title, brand_id, image, type, price, details, rating }
        const response = await fetch(`https://server-khaki-tau.vercel.app/updateproduct/${product[0]._id}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pr)
        }).then(res => {
            if (res.ok) {
                toast.success(<div className=' font-medium p-4 py-5'>Updating successful!</div>, {
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
        })

    }
    const [errors, seterrors] = useState(null)
    return (
        <div>
            <form onSubmit={handleSubmit} id="update-form" className="card-body md:w-1/2 xl:w-1/3 mx-auto h-full md:pt-20 md:pb-[30vh] flex-col flex">
                <h1 className="text-4xl pb-6 text-shoulddark">Update Product</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Title</span>
                    </label>
                    <input type="text" placeholder="title" name="title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Photo URL (optional)</span>
                    </label>
                    <input type="text" placeholder="image" name="image" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Price</span>
                    </label>
                    <input type="number" name="price" min="1" step="any" placeholder="0.00" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Details (optional)</span>
                    </label>
                    <input type="text" name="details" placeholder="details" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Brand</span>
                    </label>
                    <select name="brands" tabIndex={0} id="brand-selector" onChange={brandchange} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mb-6">
                        {Array.isArray(brands) && brands.map((i, index) => {
                            return <option value={index} key={index}>{i.brandname}</option>
                        })}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Type</span>
                    </label>
                    <select name="type" tabIndex={0} id="type-selector" onChange={typechange} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mb-6">
                        {foodtypes.map((i, index) => {
                            return <option value={index} key={index}>{i.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Rating</span>
                    </label>
                    <div className="rating mb-4" id="product-rating">
                        <input type="radio" name="rating-1" id="star-0" className="mask mask-star-2 rating-stars" />
                        <input type="radio" name="rating-1" id="star-1" className="mask mask-star-2 rating-stars" />
                        <input type="radio" name="rating-1" id="star-2" className="mask mask-star-2 rating-stars" />
                        <input type="radio" name="rating-1" id="star-3" className="mask mask-star-2 rating-stars" />
                        <input type="radio" name="rating-1" id="star-4" className="mask mask-star-2 rating-stars" />
                    </div>
                </div>
                {
                    errors &&
                    <div className="form-control">
                        <label className="label flex justify-start gap-2 items-center">
                            <span className="label-text-alt bg-red-400 px-2 py-1 text-shoulddark" > {errors}</span>
                        </label>
                    </div>
                }
                <div className="form-control mt-2">
                    <button className="btn btn-warning">Update</button>
                </div>
                <div className="form-control mt-2">
                    <h2 className="btn btn-error" onClick={() => document.getElementById('deleteconfirm').showModal()}>Delete</h2>
                </div>
            </form>
            <dialog id="deleteconfirm" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-black">
                    <h3 className="font-bold text-lg">Delete</h3>
                    <p className="py-4">Are you sure you want to delete <span onClick={handleGotoDetails} id="deleteboxtitle" className="underline cursor-pointer decoration-pink-400 decoration-4"></span></p>
                    <form method="dialog" className="w-full flex justify-between">
                        <button className="btn btn-error hover:brightness-75 text-white" onClick={handleDelete}>Delete</button>
                        <button method="dialog" className="btn hover:brightness-90">Close</button>
                    </form>
                </div>
            </dialog>
            <Footer/>
            <ToastContainer />
        </div>
    );
}

export default UpdateInfo;