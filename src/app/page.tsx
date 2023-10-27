"use client"
import React from 'react';
import { Provider } from 'react-redux';
import ColorToggle from '@/components/ColorToggle';
import store from '@/redux/store';

export default function Home() {
  return (
    <Provider store={store}>
      <ColorToggle />
    </Provider>
  );
}