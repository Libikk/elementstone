import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <main>
    <Header />
    {children}
    <Footer />
  </main>
);

export default Layout;
