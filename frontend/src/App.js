import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LandingVsl from "./views/LandingVsl/LandingVsl";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/vsl" component={LandingVsl} />
      {/* <WhatsAppButton /> */}
    </div>
  );
}

export default App;

