import { Switch, Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Home from './Pages/Home/Home'

import './Components/Styles/Bootstrap-min.css'
import './App.css';


function App() {
  return (
    <>
      <Nav />

      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </>
  );
}

export default App;
