import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/Home" exact component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
