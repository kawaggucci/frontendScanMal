import React from 'react';

const ScanButton = () => {
  const handleClick = () => {
    console.log('clicked');
    // TODO: add actual upload logic here
  };

  return (
    <div className="mt-4 text-left px-6">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
      >
        Scan File
      </button>
    </div>
  );
};

export default ScanButton;