import { Switch, Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import WorkProcess from './Pages/WorkProcess/WorkProcess'

import './Components/Styles/Bootstrap-min.css'
import './App.css';


function App() {
  return (
    <>
      <Nav />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/workprocess" component={WorkProcess} exact />
      </Switch>
    </>
  );
}

export default App;
