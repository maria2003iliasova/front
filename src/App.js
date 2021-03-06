import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Haircut from "./pages/Haircut"
import Hygiene from "./pages/Hygiene"
import Cleaning from "./pages/Cleaning"
import Creative from "./pages/Creative"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Layout from "./components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Haircut" exact component={Haircut} />
          <Route path="/Hygiene" exact component={Hygiene} />
          <Route path="/Cleaning" exact component={Cleaning} />
          <Route path="/Creative" exact component={Creative} />
          <Route path="/SignIn" exact component={SignIn} />
          <Route path="/SignUp" exact component={SignUp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
