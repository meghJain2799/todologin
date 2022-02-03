import './App.css';
import { Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import ShowToDo from './Components/ShowToDo'

function App() {
  return (
    <div className="App">
      
     <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
