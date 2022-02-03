import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";


const ShowToDo = (props) => {
  const [data, setData] = useState([]);

  const deleteToDo = (_id) => {
    let config = {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      };
      axios.delete(`http://localhost:5000/api/notes/deletenote/${_id}`, config)
      .then(res => console.log(res))
  }

//   useEffect(() => {
    
//   }, [data]);
  let config = {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  };
  axios
    .get("http://localhost:5000/api/notes/fetchallnotes", config)
    .then((res) => setData(res.data));

  return (
    <div className="container">
      <h1> I am your to do</h1>

      <div className="row">
                <div className="col-3">

      {data.map((ele, i) => {
        return (
    
                

            <div className="card ">
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">
                 {ele.description}
                </p>
                <p className="card-text">
                 {ele.tag}
                </p>
                <IconButton>
                <DeleteIcon onClick={() => {deleteToDo(ele._id)}}/>
                </IconButton>
                <Link  to ={`/edit/${ele._id}`}>
                Edit
               </Link>
                
              </div>
            </div>
            
          
        );
      })}
      </div>
            </div>
    </div>
  );
};

export default ShowToDo;
