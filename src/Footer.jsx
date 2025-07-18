import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 h-10" >
            <hr  className="text-gray-300"/>
            <div className="px-108 text-lg">
            <Link className="text-gray-500" to= '/'>use</Link>
            <Link className="text-gray-500 px-8 " to= '/about'>/uses</Link>
            <Link className="text-gray-500 px-108" to= '/details/:id'>mmxxv</Link>
            </div>    

        </footer>
    );
}