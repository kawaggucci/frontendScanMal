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