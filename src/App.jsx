import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FlamesCalculator from './components/Calculator';
import LoadingPage from './components/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
      // Simulate loading animation for 1 second when the app mounts
      const loadingTimeout = setTimeout(() => {
          setIsLoading(false); // End loading animation after 1 second
      }, 1000); // 1 second

      return () => clearTimeout(loadingTimeout); // Cleanup timeout on unmount
  }, []);  
  return (
    <div className="App">
      <Header />
      {isLoading ? (
                <LoadingPage/>
            ) : (
              <FlamesCalculator />
            )}
      <Footer />
    </div>
  );
}

export default App;
