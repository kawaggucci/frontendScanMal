import React from 'react';
import Heading from './c-components/UploadHeading';
import UploadInstructions from './c-components/UploadInstructions';
import ScanButton from './c-components/c-button';
import ReportButton from './c-components/ReportButton';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black-900 to-blue-800 ">
      <Heading />
      <UploadInstructions />
      <ScanButton />
      <ReportButton />
    </div>
  );
}

export default App;
