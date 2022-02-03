import './App.css';
import { Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import ShowToDo from './Components/ShowToDo'
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      
     <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
