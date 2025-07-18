import React, { useState } from 'react';

const ReportButton = () => {
  const [reportMessage, setReportMessage] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      const response = await fetch('https://upload-api-api112358.azurewebsites.net/upload', {
        method: 'GET', 
      });

      if (!response.ok) {
        setReportMessage("Thank you for your patience, we're getting your report.");
        return;
      }

      const data = await response.json();

      switch (data.status) {
        case 'safe':
          setReportMessage('This file is safe to use.');
          break;
        case 'danger':
          setReportMessage('We have some security concerns about this file.');
          break;
        default:
          setReportMessage("Report is available, but couldn't be interpreted.");
      }
    } catch (error) {
      console.error('Report fetch failed:', error);
      setReportMessage('Error fetching report. Please try again later.');
    }
  };

  return (
    <div className="mt-4 text-left px-6">
      <button 
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
      >
        Get Report
      </button>

      <p className="mt-2 text-sm text-gray-800">
        {reportMessage || 'Refresh here for your report.'}
      </p>
    </div>
  );
};

export default ReportButton;

