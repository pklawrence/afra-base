import {Moon, Sun} from 'lucide-react';
import { useState, useEffect } from 'react';

function Darkmode ()  {
   
        const [toggled, setToggled] = useState(false);

    
            useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setToggled(prefersDark);
        
        if (prefersDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !toggled;
       setToggled(newTheme);
        
        if (newTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return(
        <div className='flex p-1 rounded-lg bg-gray-300 space-x-1 '>
           <button onClick={toggleTheme}
                className={` rounded-md transition-all duration-300 ${
                    toggled ? 'bg-gray-200 text-yellow-400' : 'bg-transparent text-gray-500'
                }`}>
                <Moon size={18} color='gray' />
            </button> 
            <button   onClick={toggleTheme}
                className={`rounded-md transition-all duration-300 ${
                    !toggled ? 'bg-white text-yellow-500' : 'bg-transparent text-gray-500'
                }`}

            >
                <Sun size={18} color='gray' className={!toggled ? 'animate-pulse' : ''}/></button>
        </div>
    )

}

export default Darkmode;