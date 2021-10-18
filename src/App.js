import {HashRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";


import Home from "./webpages/Home";
import Login from "./webpages/Login";
import Erro from "./webpages/Erro";
import Films from "./webpages/Films"
import Starships from "./webpages/Starships"
import People from "./webpages/People";
import Planets from "./webpages/Planets";
import Species from "./webpages/Species";

function App() {
  return (
    <div>
      <HashRouter>

        <Header/>

        <Switch>
          <Route path="/" exact={true} component={Home}/>

          <Route path = "/login" exact={true} component={Login}/>

          <Route path="/films" exact={true} component={Films}/>

          <Route path="/starships" exact={true} component={Starships}/>

          <Route path="/people" exact={true} component={People}/>

          <Route path="/planets" exact={true} component={Planets}/>

          <Route path="/species" exact={true} component={Species}/>

          <Route path="*" component={Erro}/>

        </Switch>

      </HashRouter>
    </div>
  );

}

export default App;
