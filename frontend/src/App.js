import {
  Switch,
  Route,
  Redirect,
  Router
} from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import history from "./history";

function App() {
  const loggedIn = localStorage.getItem("loggedIn")
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route
          path="/home"
          component={Home}
        />
        <Route
          path="/gallery"
          component={Gallery}
        />
        <Route
          path="/contact"
          component={Contact}
        />
        <Route
          path="/about"
          component={About}
        />
        {loggedIn ?
          <Route
            path="/admin"
            component={Admin}
          />
          :
          <Route
            path="/auth"
            component={Auth}
          />
        }
        <Redirect from="*" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
