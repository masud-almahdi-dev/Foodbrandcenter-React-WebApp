import { NavLink } from "react-router-dom";

const Footer = () => {

    const links = <>
        <NavLink className="link link-hover" to="/">Home</NavLink>
        <NavLink className="link link-hover" to="/addproduct">Add Product</NavLink>
        <NavLink className="link link-hover" to="/mycart">My Cart</NavLink>
        <button className="link link-hover opacity-50">Brands</button>
    </>
    return ( 
        <div className="w-full bottom-0 bg-yellow-400 text-base-content mt-12">
            
            <footer className=" container mx-auto footer p-10 ">
                <aside data-aos="fade-right">
                    <img src="/logo2.png" alt="" />
                    <p>Food Group Center<br />Enjoy The Foods That You Love!</p>
                </aside>
                <nav>
                    <header className="footer-title opacity-50">Services</header>
                    {links}
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover opacity-50">About us</a>
                    <a className="link link-hover opacity-50">Contact</a>
                    <a className="link link-hover opacity-50">Jobs</a>
                    <a className="link link-hover opacity-50">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover opacity-50">Terms of use</a>
                    <a className="link link-hover opacity-50">Privacy policy</a>
                    <a className="link link-hover opacity-50">Cookie policy</a>
                </nav>
            </footer>
        </div>
     );
}
 
export default Footer;