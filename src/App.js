import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
// import Navbar from './components/Navbar';
import Footer, { FooterPushDown } from './components/Footer';

// Pages
import About from './pages/About';


// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path='/' component={About} />
        </Switch>
        <FooterPushDown />
        <Footer />
      </>
    </Router>
  );
}

export default App;
