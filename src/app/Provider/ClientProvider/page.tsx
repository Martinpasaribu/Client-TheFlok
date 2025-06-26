"use client";

import { Provider } from 'react-redux';
// import store from '../store';
import { ReactNode } from 'react';
import store from '@/lib/store';
import LayoutClient from '../LayoutProvider/layout';
// import { GeistProvider, CssBaseline } from '@geist-ui/core'

type ClientProviderProps = {
  children: ReactNode;
};

export default function ClientProvider({ children }: ClientProviderProps) {

  return <Provider store={store}>
    <LayoutClient>{children}</LayoutClient>
  </Provider>;
}