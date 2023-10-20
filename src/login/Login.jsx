import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handlelogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        let email = form.get('email')
        let pass = form.get('password')
        signIn(email, pass).then(
            result => {
                navigate(location?.state ? location.state : "/");
            }
        ).catch(error =>
            toast.error(<div className='p-4 py-5'>{error.message}</div>, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            }))
    }
    const handlegooglelogin = e => {
        e.preventDefault();
        googleSignIn().then(
            result => {
                navigate(location?.state ? location.state : "/");
            }
        ).catch(error => console.log(error))
    }

    return (

        <div>
            <form onSubmit={handlelogin} className="card-body text-shoulddark md:w-1/2 xl:w-1/3 mx-auto h-full md:pt-20 md:pb-[30vh] flex-col flex">
                <div className="flex justify-between w-full gap-2 text-black mb-10">
                    <Link to="/login" state={location?.state ? location.state : "/"} className="w-full overflow-hidden p-2 text-center hover:bg-yellow-400 transition-all duration-200 bg-white rounded-md">Login</Link>
                    <Link to="/signup" state={location?.state ? location.state : "/"} className="w-full overflow-hidden p-2 text-center hover:bg-yellow-400 transition-all duration-200 bg-white rounded-md">Sign Up</Link>
                </div>
                <h1 className="text-4xl pb-6">Login</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                    <label className="label flex justify-start gap-2 items-center">
                        <span className="label-text-alt text-shoulddark" >Dont have an account?</span>
                        <Link to="/signup" state={location?.state ? location.state : "/"} className=" btn text-black border-2 px-2 py-1 rounded-lg border-yellow-400 hover:border-orange-400">Sign Up</Link>
                    </label>
                </div>
                <div className="form-control mt-2">
                    <button className="btn btn-warning">Login</button>
                </div>
                <button onClick={handlegooglelogin} className="btn btn-warning">Log In Google</button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default Login;