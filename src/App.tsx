import React from 'react';
import Heading from './c-components/UploadHeading';
import UploadInstructions from './c-components/UploadInstructions';
import ScanButton from './c-components/c-button';
import ReportButton from './c-components/ReportButton';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Heading />
      <UploadInstructions />
      <ScanButton />
      <ReportButton />
    </div>
  );
}

export default App;
