import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex flex-col items-center gap-4 w-screen overflow-x h-screen bg-yellow-700 justify-center">
            <div className="text-[10vw] bg-yellow-300 text-yellow-700 py-4 px-8 rounded-lg w-max cursor-pointer animate-pulse" aos-data="fade-right">{error? error.status? error.status:"404":"404"}</div>
            <h4 className="bg-white text-yellow-700 px-4 py-2 rounded-sm" aos-data="fade-right">{error? error.statustext || error.message || "File or Path Not Found":
            "File or Path Not Found"}</h4>
            <Link to="/" className="bg-white text-yellow-700 underline px-4 py-2 rounded-sm hover:no-underline transition-all hover:bg-yellow-200" aos-data="fade-right"> Home </Link>
        </div>
    );
}

export default ErrorPage;