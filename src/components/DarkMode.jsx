import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkMode = ({isDarkMode, cb}) => {

    return (
        <div>
            <button onClick={cb} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    aria-label={`Switch to ${DarkMode ? 'light' : 'dark'} mode`}>
                {isDarkMode ? (
                    <Sun className={"w-5 h-5 transition-transform hover:rotate-12" + isDarkMode ? 'text-gray-50': '' } />
                ) : (
                    <Moon className="w-5 h-5 transition-transform hover:rotate-12" />
                )}
            </button>
        </div>
    );
};

export default DarkMode;