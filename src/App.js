import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaxBillComponent from "./components/TaxBillComponent";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
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
