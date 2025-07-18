import React, { useState } from 'react';

const ReportButton = () => {
  const [reportMessage, setReportMessage] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      // ⏳ Simulate API request (replace with real endpoint)
      const response = await fetch('https://example.com/report-status'); // <- your real API here

      if (!response.ok) {
        setReportMessage("Thank you for your patience, we're getting your report.");
        return;
      }

      const data = await response.json();

      // 🎯 Example check – change this logic based on your real API response shape
      switch (data.status) {
        case 'safe':
          setReportMessage('✅ This file is safe to use.');
          break;
        case 'danger':
          setReportMessage('⚠️ We have some security concerns about this file.');
          break;
        default:
          setReportMessage("📄 Report is available, but couldn't be interpreted.");
      }
    } catch (error) {
      console.error('Report fetch failed:', error);
      setReportMessage('❌ Error fetching report. Please try again later.');
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

      {/* 📝 Report Message Display */}
      <p className="mt-2 text-sm text-gray-800">
        {reportMessage || '🔄 Refresh here for your report.'}
      </p>
    </div>
  );
};

export default ReportButton;
