

import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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
   const filterResult =  searchApiData.filter(item=>item.customer.toLowerCase().includes(e.target.value.toLowerCase())||item.primaryTechnology.toLowerCase().includes(e.target.value.toLowerCase())||item.mandatorySkills.toLowerCase().includes(e.target.value.toLowerCase()||item.secondarySkills.toLowerCase().includes(e.target.value.toLowerCase())))
   if(filterResult.length>0){
    setUsers(filterResult)
   }else{
    setUsers([{"name":"No Data Found"}])
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
    <Link className="btn btn-outline-light" to="/adduser">
           Add newjob posting
          </Link>
  
    <div className="container">
      <div className="py-5">
        <table className="table border shadow">
          <thead>
            <tr>
            <th scope="col">S.No</th>
              <th scope="col">JobCode</th>
              <th scope="col">Customer</th>
              <th scope="col">JobDescription</th>
              <th scope="col">PrimaryTechnology</th>
              <th scope="col">SecondarySkills</th>
              <th scope="col">MandatorySkills</th>
              <th scope="col">noofPositions</th>
              <th scope="col">dueDate</th>
              <th scope="col">createdby</th>
              <th scope="col">createddate</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((employees, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employees.jobCode}</td>
                <td>{employees.customer}</td>
                <td>{employees.jobDescription}</td>
                <td>{employees.primaryTechnology}</td>
                <td>{employees.secondarySkills}</td>
                <td>{employees.mandatorySkills}</td>
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
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${employees.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(employees.id)}
                  >
                    Delete
                  </button>
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
