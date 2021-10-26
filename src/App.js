import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Haircut from "./pages/Haircut"
import Hygiene from "./pages/Hygiene"
import Cleaning from "./pages/Cleaning"
import Creative from "./pages/Creative"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Haircut" exact component={Haircut} />
          <Route path="/Hygiene" exact component={Hygiene} />
          <Route path="/Cleaning" exact component={Cleaning} />
          <Route path="/Creative" exact component={Creative} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
