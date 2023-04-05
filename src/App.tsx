import React, { useState } from 'react';
import './App.css';
import Chessboard from './components/Chessboard';

export default function App() {

  return (
    <div className='app'>
      <Chessboard />
    </div>
  );
}
