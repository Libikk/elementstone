import React from 'react';
import Layout from './components/Layout';
import './App.scss';
import BirdsList from './components/BirdsList';

const App:React.FC = () => {
  return (
    <div className='app'>
      <Layout>
        <BirdsList/>
      </Layout>
    </div>
  );
}

export default App;
