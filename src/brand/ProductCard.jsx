import { NavLink } from "react-router-dom";

const ProductCard = ({ item }) => {
    const { _id, title, details, image, price, rating } = item
    return (
        <div className="flex flex-col rounded-lg overflow-hidden bg-red-200 shadow-lg">
            {image === "" ? <img className="aspect-video object-cover" src="https://i.ibb.co/NZ6HDq5/box.jpg" /> : <img className="aspect-video object-cover" src={image} />}
            <div className="p-4 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                <h4 className="font-semibold text-sm">${price.toFixed(2)}</h4>
                <div className="flex justify-between mt-4">
                    <NavLink to={`/brand/${_id}`} className="px-3 py-2 bg-red-400 text-red-800 hover:bg-red-300 rounded-md transition-all flex items-center justify-center text-center">Details</NavLink>
                    <NavLink to={`/brand/${_id}`} className="px-2 py-1 hover:bg-red-300 text-red-800 rounded-md transition-all flex items-center justify-center text-center">Update</NavLink>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;