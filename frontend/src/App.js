import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LandingVsl from "./views/LandingVslB/LandingVsl";
import CalendlyPageCristian from "./views/CalendlyPage/CalendlyPage";
import ThanksPage from "./views/ThanksPage/ThanksPage";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/vsl/:slug" component={LandingVsl} />
    <Route exact path="/calendly/:calendlySlug" component={CalendlyPageCristian} />
    <Route exact path="/gracias" component={ThanksPage} />

      {/* <WhatsAppButton /> */}
    </div>
  );
}

export default App;

