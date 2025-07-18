import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="sticky px-108 py-5">
            <div>
            <Link className="text-gray-500 " to= '/'>home</Link>
            <Link className="text-gray-500 p-4" to= '/about'>about</Link>
            <Link className="text-gray-500" to= '/details/:id'>blog</Link>

            </div>    
            
        </nav>
    );
}