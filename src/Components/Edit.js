import React, {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Edit = () => {

    const {_id} = useParams()
    const[edit, setEdit] = useState({
        title: '',
        description: '',
        tag: ''
    })

    const handleChange = (event) => {
        setEdit({...edit,[event.target.name]: event.target.value})
        
       }

   const updatetoDo = () => {
    let config = {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      };
      axios.put(`http://localhost:5000/api/notes//updatenote/}`, config)
      .then(res => console.log(res))
   }
  return <div>
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
        <button type="button" onClick={updatetoDo} className="btn btn-secondary">Update ToDo</button>
      </div>
  </div>;
};

export default Edit;
