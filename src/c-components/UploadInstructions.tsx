import React from 'react';

const UploadInstructions = () => {
  return (
    <header className="bg-white py-8 text-left px-6">
      <h3 className="text-2xl font-medium text-gray-800">
        Upload file
      </h3>
      <p className="text-base text-gray-600 leading-relaxed mt-2">
        Please upload your file in .json, .pdf, .txt, or .docx format. Click the 'Scan File' button once it's uploaded and wait. We'll analyse it and get back to you soon!
      </p>
    </header>
  );
};

export default UploadInstructions;
