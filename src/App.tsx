// src/components/Heading.tsx
import React from 'react';
import React, { useState } from 'react';

const Heading = () => {
  return (
    <header className="bg-white py-10 text-center shadow-md">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to ScanMal
      </h1>
      <p className="text-lg text-gray-500 mt-2">
        Your malware analysis made simple.
      </p>
    </header>
  );
};

export default Heading;


const Heading = () => {
    return (
        <header className="bg-white-500 py-10 text-left">
            <h3 className="text-2xl font-medium text-white-600 text-left">
            Upload file
            </h3>
            <p className="text-base text-white-500 leading-relaxed">
            Please upload your file in .pdf, .txt, .docx here. Click the button once it's uploaded and wait here. We'll analyse it and get back to you soon!
            </p>
        </header>
    );
};

export default Heading;



const Button = () => {
    /*const handleClick = () => {
        console.log('clicked');
    }*/

    return (
        <div className="text-lg text-white-500 mt-2 text-left">
        <button
            //onCLick={handleClick}
            className="bg-green-500 hover:bg-green-600 font-medium py-2 px-4 rounded">
                Scan File
        </button>
        </div>
    );
};

export default Button;



/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
<<<<<<< HEAD
        <h1>Test1</h1>
=======
       <h1>Test run</h1>
>>>>>>> 23bf068e158927ae719b50278628f184d75db292
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
<div class="text-2xl font-bold text-blue-600 p-4">👋 Preview build!</div>
