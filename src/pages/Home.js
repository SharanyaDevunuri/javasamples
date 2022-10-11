

import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";



export default function Home() {
  
  const[searchApiData,setSearchApiData]=useState([]);
  const[filterVal,setFilterVal]=useState('');
  
  const [users, setUsers] = useState([]);
  
   

  
  const { id } = useParams();

  useEffect(() => {
    const fetchData=()=>{
      fetch('http://localhost:8080/employees')
      
           setUsers(users)
           setSearchApiData(users)
   }

    fetchData();
    loadUsers();
  }, []);

const handleFilter=(e)=>{
  if(e.target.value==''){
    setUsers(searchApiData)
  } else{
   const filterResult = searchApiData.filter(item=>item.customer.toLowerCase().includes(e.target.value.toLowerCase())||item.primaryTechnology.toLowerCase().includes(e.target.value.toLowerCase()))
   if(filterResult.length>0){
    setUsers(filterResult)
   }
   
   setUsers(filterResult)
  }
  setFilterVal(e.target.value)
}

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/employees");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/employees/${id}`);
    loadUsers();
  };

  return (
    
    

    <div> <input type='Search' placeholder='Search... Based on customer or Technology ' value={filterVal} onInput={(e)=>handleFilter(e)}
    />
    <Link
                    className="outline-primary mx-2"
                    to={``}
                  >
                          Add new job posting
                  </Link>
    <div className="container">
      <div className="py-5">
        <table className="table border shadow">
          <thead>
            <tr>
           
              <th scope="col">Job Code</th>
              <th scope="col">Customer</th>
              <th scope="col">Job Description</th>
              <th scope="col">Primary Technology</th>
              <th scope="col">No of Positions</th>
              <th scope="col">Due Date</th>
              <th scope="col">Created By</th>
              <th scope="col">Created Date</th>
              <th scope="col">Action</th>
            </tr>
            
          </thead>
          <tbody>
            
            {users.map((employees, index) => (
              <tr>
                
                <td>{employees.jobCode}</td>
                <td>{employees.customer}</td>
                <ReactReadMoreReadLess 
                readMoreClassName="readMoreClassName"
                charLimit={10}
                readMoreText="Read More.."
                readLessText="Read Less"
                >
                employees.jobDescription 
                </ReactReadMoreReadLess>
                <td>{employees.jobDescription }</td>
                
                <td>{employees.primaryTechnology}</td>
                
                <td>{employees.noofPositions}</td>
                <td>{employees.dueDate}</td>
                <td>{employees.createdby}</td>
                <td>{employees.createddate}</td>

                <td>
                  {/* <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${employees.id}`}
                  >
                    View
                  </Link> */}
                
                  <div></div>
                  <Link
                  
                    className="outline-primary mx-2"
                    to={`/edituser/${employees.id}`}
                  >
                    Edit
                  
                  </Link>
                  <MdEdit>edit</MdEdit>
                  <MdDelete 
                    className="danger mx-2" color="red" size={"1.5rem"}
                    onClick={() => deleteUser(employees.id)}
                    Delete
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
   
      
    
  );
}
