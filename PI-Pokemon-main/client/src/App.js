import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./componentes/Home.jsx";
import Landing from "./componentes/Landing.jsx";
import Create from "./componentes/Create.jsx";
import  Details  from "./componentes/Details.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Home/:id" component={Details} />
        <Route exact path="/create" component={Create} />
        <Route path="*" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
