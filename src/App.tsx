import React from 'react';
import Heading from './components/Heading';
import UploadInstructions from './components/UploadInstructions';
import ScanButton from './components/ScanButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Heading />
      <UploadInstructions />
      <ScanButton />
    </div>
  );
}

export default App;
