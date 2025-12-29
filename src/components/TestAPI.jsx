import React, { useEffect, useState } from 'react';
import { authAPI, productsAPI } from '../services';

const TestAPI = () => {
  const [status, setStatus] = useState('Testing API...');
  const [results, setResults] = useState({});

  useEffect(() => {
    const testAPI = async () => {
      try {
        console.log('Base URL:', import.meta.env.VITE_BASE_URL);
        
        // Test Categories
        const categories = await productsAPI.getAllCategories();
        console.log('Categories:', categories);
        
        setResults(prev => ({ ...prev, categories: categories?.length || 0 }));
        setStatus('API working!');
      } catch (error) {
        console.error('API Error:', error);
        setStatus(`API Error: ${error.message}`);
        setResults(prev => ({ ...prev, error: error.message }));
      }
    };

    testAPI();
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h3>API Test Results</h3>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Base URL:</strong> {import.meta.env.VITE_BASE_URL}</p>
      {results.categories && <p><strong>Categories found:</strong> {results.categories}</p>}
      {results.error && <p style={{color: 'red'}}><strong>Error:</strong> {results.error}</p>}
    </div>
  );
};

export default TestAPI;