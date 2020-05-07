import React, { useContext } from 'react';
import { Switch, Route } from "react-router-dom";
import { ThemeContext } from './contexts/ThemeContext'

import Navbar from './mainComponents/Navbar'
import Home from './mainComponents/Home'
import Todos from './mainComponents/Todos'
import MindReader from './mainComponents/MindReader'
import Error from './mainComponents/Error'



function App() {
  const { theme } = useContext(ThemeContext)
  const mainColor = theme ? "light" : "dark"
  const background = theme ? "dark" : "light"
  return (
    <div className={`container text-${mainColor} bg-${background}`}>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/todos" component={Todos} />
        <Route path="/game" component={MindReader} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
// text-success bg-dark pb-5
export default App;
