import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import LandingPage from "./page/landingPage";
import DashboardPage from "./page/dashboard";
import SignUpPage from "./page/signUpPage";
import CounterPager from "./page/CounterPager";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/dashboard" Component={DashboardPage} />
          <Route path="/signUp" Component={SignUpPage} />
          <Route path="/counter" Component={CounterPager} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
