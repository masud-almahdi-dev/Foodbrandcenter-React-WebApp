import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const [currentbrand, setcurrentbrand] = useState("0")
    const location = useLocation()
    const brands = useLoaderData()
    //console.log(brands)
    const navigate = useNavigate()
    const brandchange = e => {
        e.preventDefault();
        setcurrentbrand(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        let title = form.get('title')
        let image = form.get('image')
        let price = parseFloat(form.get('price'))
        let details = form.get('details')
        let ratingcontainer = document.querySelector("#product-rating")
        let rating = 4
        for(let i =0; i< ratingcontainer.children.length; i++){
            if(ratingcontainer.children[i].checked){
                rating = i
                break
            }
        }
        let brand_id = brands[currentbrand]._id
        let product = { title, brand_id , image, price , details, rating} 
        const response = await fetch(`${import.meta.env.SERVER_URI || "http://localhost:5000"}/addproduct`,{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(product)
        }).then(res=>console.log(res))

    }
    const [errors, seterrors] = useState(null)
    return (

        <div>
            <form onSubmit={handleSubmit} className="card-body md:w-1/2 xl:w-1/3 mx-auto h-full md:pt-20 md:pb-[30vh] flex-col flex">
                <h1 className="text-4xl pb-6 text-shoulddark">Add Product</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Title</span>
                    </label>
                    <input type="text" placeholder="title" name="title" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Photo URL (optional)</span>
                    </label>
                    <input type="text" placeholder="image" name="image" className="input input-bordered"  />
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
                    <select name="brands" tabIndex={0} onChange={brandchange} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mb-6">
                        {brands.map((i, index) => {
                            return <option value={index} key={index}>{i.brandname}</option>
                        })}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Rating</span>
                    </label>
                    <div className="rating mb-4" id="product-rating">
                        <input type="radio" name="rating-1" className="mask mask-star-2 rating-stars" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 rating-stars" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 rating-stars" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 rating-stars" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 rating-stars" />
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
                    <button className="btn btn-warning">Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;