import { useState } from 'react';

const ReportButton = () => {
  const [reportMessage, setReportMessage] = useState<string | null>(null);
  const [reportData, setReportData] = useState<any>(null); // Holds the fetched JSON data

  const handleClick = async () => {
    try {
      const file_id = localStorage.getItem('file_id');
      const response = await fetch(`https://upload-api-api112358.azurewebsites.net/report/${file_id}.json`, {
        method: 'GET',
      });

      if (!response.ok) {
        setReportMessage("Thank you for your patience, we're getting your report.");
        return;
      }

      const data = await response.json(); // Await this!
      setReportData(data); // Store the data
      setReportMessage(null); // Clear any previous message

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
          {reportMessage || (!reportData && 'Refresh here for your report.')}
        </p>

        {/* Render reportData nicely if it exists */}
        {reportData && (
            <div className="mt-4 p-4 bg-gray-100 rounded text-sm text-gray-900">
          <pre className="whitespace-pre-wrap break-words">
            {JSON.stringify(reportData, null, 2)}
          </pre>
            </div>
        )}
      </div>
  );
};

export default ReportButton;
