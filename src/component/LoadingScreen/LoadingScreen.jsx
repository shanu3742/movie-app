import React, { memo } from 'react';
import './LoadingScreen.scss';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p className="loading-text">Loading, please wait...</p>
    </div>
  );
};

export default memo(LoadingScreen);