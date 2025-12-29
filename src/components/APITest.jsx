import React, { useEffect, useState } from 'react';
import { httpClient } from '../lib/axios/axios';

const APITest = () => {
  const [status, setStatus] = useState('Testing API...');
  const [results, setResults] = useState({});

  useEffect(() => {
    const testAPI = async () => {
      try {
        console.log('Base URL:', import.meta.env.VITE_BASE_URL);
        
        // Test with JSONPlaceholder
        const response = await httpClient.get('/posts/1');
        console.log('API Response:', response.data);
        
        setResults({ success: true, data: response.data });
        setStatus('API working!');
      } catch (error) {
        console.error('API Error:', error);
        setStatus(`API Error: ${error.message}`);
        setResults({ error: error.message });
      }
    };

    testAPI();
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', backgroundColor: '#f9f9f9' }}>
      <h3>API Connection Test</h3>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Base URL:</strong> {import.meta.env.VITE_BASE_URL}</p>
      {results.success && (
        <div>
          <p style={{color: 'green'}}><strong>✅ API is working!</strong></p>
          <p><strong>Sample data:</strong> {results.data?.title}</p>
        </div>
      )}
      {results.error && (
        <p style={{color: 'red'}}><strong>❌ Error:</strong> {results.error}</p>
      )}
    </div>
  );
};

export default APITest;