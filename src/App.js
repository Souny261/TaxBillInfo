import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaxBillComponent from "./components/TaxBillComponent";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route
            path="/billinfo/:billID"
            exact
            element={<TaxBillComponent />}
          />
          <Route path="/*">404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


