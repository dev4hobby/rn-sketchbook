import React from 'react';
import { LogBox } from 'react-native';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <MainPage />
  );
}
