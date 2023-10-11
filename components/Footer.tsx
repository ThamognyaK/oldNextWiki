import React from 'react';
import Link from 'next/link';

interface boppity {
    Year: string;
  }
const Footer= ({Year}: boppity) => {
    return (
    <footer className="bg-gray-900 text-white text-center py-4">
        &copy; {Year} - Content on this site is licensed under a Creative Commons Attribution 4.0 International license. The repository used to create this website is available at gitlab.igem.org/2023/austin-utexas.
    </footer>
  )
}


export default Footer;