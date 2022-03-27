import React from 'react';
import Layout from '../components/Layout';
import style from './App.module.scss';
import BirdsList from '../components/BirdsList';

const App:React.FC = () => {
  return (
    <div className={style.app}>
      <Layout>
        <BirdsList/>
      </Layout>
    </div>
  );
}

export default App;
