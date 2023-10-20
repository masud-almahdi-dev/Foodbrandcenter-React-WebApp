import { NavLink } from "react-router-dom";

const CartItem = ({ item,remover }) => {
    const { _id, title, details, image, price, rating } = item
    let ratingstars = [0, 0, 0, 0, 0]

    const stars =
        <div className="rating mb-4" id="product-rating">
            {ratingstars.map((item, index) => {
                return index == rating ?
                    <input type="radio" key={index} name="rating-1" className="mask mask-star-2 rating-stars" readOnly checked /> :
                    <input type="radio" key={index} name="rating-1" className="mask mask-star-2 rating-stars" readOnly />
            })}
        </div>

    return (
        <div className="flex flex-col rounded-lg overflow-hidden bg-red-200 shadow-lg" data-aos="fade-right">
            {image === "" ? <img className="aspect-video object-cover" src="https://i.ibb.co/NZ6HDq5/box.jpg" /> : <img className="aspect-video object-cover" src={image} />}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                <h4 className="font-semibold text-sm">Price : ${price.toFixed(2)}</h4>
                {stars}
                <div className="flex justify-between mt-4">
                    <NavLink to={`/product/${_id}`} className="px-3 py-2 bg-red-400 text-red-800 hover:bg-red-300 rounded-md transition-all flex items-center justify-center text-center">Details</NavLink>
                    <button onClick={remover} className="px-2 py-1 hover:bg-red-300 text-red-800 rounded-md transition-all flex items-center justify-center text-center">Remove From Cart</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;