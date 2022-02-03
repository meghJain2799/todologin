import axios from "axios";
import React, {useState} from "react";
import Navbar from "./Navbar";
import ShowToDo from "./ShowToDo";

const Home = () => {
  
  const addtoDo = () => {
    let config = {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    }

    axios.post('http://localhost:5000/api/notes/addnote', todo, config)
    .then(res => console.log(res))
  }

  const[todo, setToDo] = useState({
    title: '',
    description: '',
    tag: ''

  })
  const handleChange = (event) => {
   setToDo({...todo,[event.target.name]: event.target.value})
   
  }
  return (
    <div>
      <Navbar />
      <h1> Write your To Do's here</h1>

      <div className="container mx-2 my-2">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1"  className="form-label" >
            Title
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            name="title"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Tag
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            name="tag"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="button" onClick={addtoDo} className="btn btn-secondary">Add ToDo</button>
      </div>
      <ShowToDo />
    </div>
  );
};

export default Home;
