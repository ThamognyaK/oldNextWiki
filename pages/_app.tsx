import '@/styles/globals.css';
import 'flowbite';
import 'flowbite-react';
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}