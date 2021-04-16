import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer, { FooterPushDown } from './components/Footer';

// Pages
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/About' component={About} />
        <Route exact path='/Portfolio' component={Portfolio} />
        <Route exact path='/Resume' component={Resume} />
        <Route exact path='/Contact' component={Contact} />
      </Switch>
      <FooterPushDown />
      <Footer />
    </Router>
  );
}

export default App;
