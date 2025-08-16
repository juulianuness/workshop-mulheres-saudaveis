import React from 'react';
import Hero from './components/Hero';
import AreasSaude from './components/AreasSaude';
import Palestrantes from './components/Palestrantes';
import Programacao from './components/Programacao';
import Lotes from './components/Lotes';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <>
      <Hero />
      <AreasSaude />
      <Palestrantes />
      <Programacao />
      <Lotes />
      <Footer />
    </>
  );
}

export default App;
