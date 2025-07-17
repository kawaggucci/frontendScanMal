import React from 'react';
import Heading from './c-components/UploadHeading';
import UploadInstructions from './c-components/UploadInstructions';
import ScanButton from './c-components/c-Button';

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
