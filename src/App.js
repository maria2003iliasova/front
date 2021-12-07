import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Haircut from "./pages/Haircut"
import Hygiene from "./pages/Hygiene"
import Cleaning from "./pages/Cleaning"
import Creative from "./pages/Creative"
import Post_worker from "./pages/Post_worker"
import Post_service from "./pages/Post_service"
import Get_login from "./pages/Get_login"
import Layout from "./components/Layout"

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
          <Route path="/Post_worker" exact component={Post_worker} />
          <Route path="/Post_service" exact component={Post_service} />
          <Route path="/Get_login" exact component={Get_login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
