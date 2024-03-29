import React from 'react';
import Navbar from './Navbar';
import './Hero.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Locations from './components/pages/Locations';
import PGPR from './components/pages/PGPR';
import YST from './components/pages/YST';
import YIH from './components/pages/YIH';
import UTN from './components/pages/UTN';
import USC from './components/pages/USC';
import BIZ from './components/pages/BIZ';
import MDN from './components/pages/MDN';
import COM from './components/pages/COM';
import SCP from './components/pages/SCP';
import SDE from './components/pages/SDE';
import FASS from './components/pages/FASS';
import LAW from './components/pages/LAW';
import Footer from './components/Footer';

function App2({handleLogOut}) {
  return (
    <>
      <Router>
        <Navbar handleLogOut={handleLogOut}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/locations' component={Locations} />
          <Route path='/pgpr' component={PGPR} />
          <Route path='/yst' component={YST} />
          <Route path='/yih' component={YIH} />
          <Route path='/utn' component={UTN} />
          <Route path='/usc' component={USC} />
          <Route path='/biz' component={BIZ} />
          <Route path='/mdn' component={MDN} />
          <Route path='/com' component={COM} />
          <Route path='/scp' component={SCP} />
          <Route path='/sde' component={SDE} />
          <Route path='/fass' component={FASS} />
          <Route path='/law' component={LAW} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App2;
