import React from 'react'
import { StatusBar, LogBox } from 'react-native'

import Routes from './src/routes'

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}