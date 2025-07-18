import React, { useState } from 'react';

const ScanButton = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setMessage(null); // Clear any previous messages
    }
  };

  const handleClick = async () => {
    if (!file) {
      setMessage('Please choose a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    setMessage(null);

    try {
      const response = await fetch('https://upload-api-api112358.azurewebsites.net/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      setMessage('Upload successful!');
      console.log('Server response:', result);
      localStorage.setItem('file_id', result.file_id);

    } catch (error: any) {
      console.error('Error uploading file:', error);
      setMessage(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mt-4 px-6">
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-2 block"
      />

      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Scan File'}
      </button>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
};

export default ScanButton;
