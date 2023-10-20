import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
const SignUp = () => {

    const { createUser,googleSignIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        let name = form.get('name')
        let email = form.get('email')
        let pass = form.get('password')
        if(pass.length < 6){
            seterrors("Password Length must be more than 6 characters.")
        }
        else if( ! /[A-Z]/.test(pass)){
            seterrors("Password must have atleast one upercase character")
        }
        else if( ! /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(pass)){
            seterrors("Password must contain at least one Special Symbol.")
        }
        else{
            createUser(email, pass,).then(
                res => updateProfile(res.user, { displayName: name }).then(
                    result => {
                        navigate(location?.state ? location.state : "/");
                    }
                ).catch(error => console.log(error))
            )
        }
    }
    const handlegooglelogin = e =>{
        e.preventDefault();
        googleSignIn().then(
            result=>{
                navigate(location?.state ? location.state : "/");
            }
        ).catch(error=>console.log(error))
    }
    const [errors, seterrors] = useState(null)
    return (

        <div>
            <form onSubmit={handleSignUp} className="card-body md:w-1/2 xl:w-1/3 mx-auto h-full md:pt-20 md:pb-[30vh] flex-col flex">
                <div className="flex justify-between w-full gap-2 text-black mb-10">
                    <Link to="/login" state={location?.state ? location.state : "/"} className="w-full overflow-hidden p-2 text-center hover:bg-yellow-400 transition-all duration-200 bg-white rounded-md">Login</Link>
                    <Link to="/signup" state={location?.state ? location.state : "/"} className="w-full overflow-hidden p-2 text-center hover:bg-yellow-400 transition-all duration-200 bg-white rounded-md">Sign Up</Link>
                </div>
                <h1 className="text-4xl pb-6 text-shoulddark">SignUp</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark" name='fullname'>Name</span>
                    </label>
                    <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-shoulddark">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                {
                    errors &&
                    <div className="form-control">
                        <label className="label flex justify-start gap-2 items-center">
                            <span className="label-text-alt bg-red-400 px-2 py-1 text-shoulddark" > {errors}</span>
                        </label>
                    </div>
                }
                <div className="form-control">
                    <label className="label flex justify-start gap-2 items-center">
                        <span className="label-text-alt text-shoulddark" >  Already Have an account?</span>
                        <Link to="/login" state={location?.state ? location.state : "/"} className=" btn text-black border-2 px-2 py-1 rounded-lg border-yellow-400 hover:border-orange-400">Log In</Link>
                    </label>
                </div>
                <div className="form-control mt-2">
                    <button className="btn btn-warning">SignUp</button>
                </div>
                <button onClick={handlegooglelogin} className="btn btn-warning">Log In Google</button>
            </form>
        </div>
    );
}

export default SignUp;