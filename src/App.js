import {Routes, BrowserRouter as Router, Route} from "react-router-dom"
import { Helmet } from "react-helmet";
import TicTacToe from "./main_app/TicTacToe";

function App() {
  return (
    <div>
      <Helmet>
        <title>
          TicTacToe
        </title>
        <meta name="description" content="Just A Fun Game !" />
      </Helmet>

      <Router>
          <Routes>
            
            <Route element={<TicTacToe />} path="/" />
           
          </Routes>
      </Router>

      
    </div>
  );
}

export default App;
