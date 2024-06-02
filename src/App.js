import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import LandingPage from "./page/landingPage";
import DashboardPage from "./page/dashboard";
import SignUpPage from "./page/signUpPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/dashboard" Component={DashboardPage} />
          <Route path="/signUp" Component={SignUpPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
