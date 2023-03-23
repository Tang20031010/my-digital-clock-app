import './App.css';
import Main from "./pages/Main";
import Hello from "./pages/Hello"
import 'bootstrap/dist/css/bootstrap.css'
import {Routes, Route, HashRouter} from "react-router-dom"; 
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path = "/" element = {<Main />}/>
          <Route path = "/Hello" element = {<Hello />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;