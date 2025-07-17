// src/components/Heading.tsx
import React from 'react';

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



/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Test1</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
<div class="text-2xl font-bold text-blue-600 p-4">👋 Preview build!</div>
