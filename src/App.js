import React from 'react';
import './App.css';
import './css/Common.css';
import './css/reset.css';

import Header from './component/header';
import H3Content from './component/h3Content';
import Footer from './component/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <H3Content/>
      <Footer />
    </div>
  );
}

export default App;
