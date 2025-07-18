import React from 'react';

const Heading = () => {
  return (
    <header className="bg-white py-8 px-4 text-center shadow-md border-b">
      <h1 className="text-4xl font-extrabold text-white-800 tracking-tight">
        Welcome to <span className="text-white-800">ScanMal</span>
      </h1>
      <p className="text-lg text-green-100 mt-2">
        Your malware analysis made simple.
      </p>
    </header>
  );
};

export default Heading;
