import { Link } from "react-router-dom";
const Details = () => {
    return (
        <div className="sticky px-108 anim " >
            <h2 className="text-gray-400">blog</h2>
            <hr className="text-gray-300"/>
            <Link className="flex py-1.5" to='/brief/:id'>
            <p className="text-gray-500">Optimizing performance</p>
            <p className="text-gray-400 text-right grow">July, 2025</p>
            </Link>
            <hr className="text-gray-300"/>
            <Link className="flex py-1.5" to='/systematic/:id'>
            <p className="text-gray-500">Systematic Approach</p>
            <p className="text-gray-400 text-right grow">July, 2025</p>
            </Link>
            <hr className="text-gray-300"/>
            <Link className="flex py-1.5" to='/solve/:id'>
            <p className="text-gray-500">Problem Solving</p>
            <p className="text-gray-400 text-right grow">July, 2025</p>
            </Link>
            <hr className="text-gray-300"/>
            <Link className="flex py-1.5" to='/brief/:id'>
            <p className="text-gray-500">Procastination</p>
            <p className="text-gray-400 text-right grow">July, 2025</p>
            </Link>

        </div>
    

        
    
    )
  };
  
  export default Details;