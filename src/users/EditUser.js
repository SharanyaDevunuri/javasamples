import { integerPropType } from "@mui/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();


  const [user, setUser] = useState({
    jobCode: "",
    customer: "",
    jobDescription: "",
    primaryTechnology: "",
    secondarySkills: "",
    mandatorySkills: "",
    noofPositions: "",
    dueDate: "",
    createdby: "",
    createddate: "",
  });

  const { jobCode,customer , jobDescription,primaryTechnology,secondarySkills,mandatorySkills,noofPositions,dueDate,createdby,createddate, } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    await axios.put(`http://localhost:8080/employees/${id}`, user);
    navigate("/");
    
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/employees/${id}`);
    setUser(result.data);
  };
  


  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-2">
              <label htmlFor="customer" className="form-label">
                Customer
              </label>
              
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Customer"
                name="customer"
                value={customer}
                onChange={(e) => onInputChange(e)}
                
              />
              {customer==0?<p style={{"color":"red"}}>*Enter Data</p>:null}
            
            </div>
            
            <div className="mb-2">
              <label htmlFor="jobDescription" className="form-label">
                Job Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Job Description"
                name="jobDescription"
                value={jobDescription}
                onChange={(e) => onInputChange(e)}
              />
              {jobDescription==0?<p style={{"color":"red"}}>*Enter Data</p>:null}
            </div>
            
            <div className="mb-2">
              <label htmlFor="primaryTechnology" className="form-label">
                Primary Technology
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Primary Technology"
                name="primaryTechnology"
                value={primaryTechnology}
                onChange={(e) => onInputChange(e)}
              />
              {primaryTechnology==0?<p style={{"color":"red"}}>*Enter Data</p>:null}
            </div>
            <div className="mb-2">
              <label htmlFor="secondarySkills" className="form-label">
                Secondary Skills
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Secondary Skills"
                name="secondarySkills"
                value={secondarySkills}
                onChange={(e) => onInputChange(e)}
              />
              {secondarySkills==0?<p style={{"color":"red"}}>*Enter Data</p>:null}
            </div>
            
            <div className="mb-2">
              <label htmlFor="mandatorySkills" className="form-label">
                Mandatory Skills
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Mandatory Skills"
                name="mandatorySkills"
                value={mandatorySkills}
                onChange={(e) => onInputChange(e)}
              />
              {mandatorySkills==0?<p style={{"color":"red"}}>*Enter Data</p>:null}
            </div>
            
            <div className="mb-2">
              <label htmlFor="noofPositions" className="form-label">
                Number of Positions
              </label>
              <input
                type={integerPropType}
                className="form-control"
                placeholder="Enter your Number of Positions"
                name="noofPositions"
                value={noofPositions}
                onChange={(e) => onInputChange(e)}
              />
              {noofPositions==0?<p style={{"color":"red"}}>*Enter Data</p>:null}
            </div>
            
            <div className="mb-2">
              <label htmlFor="dueDate" className="form-label">
                dueDate
              </label>
              <input
                type={'date'}
                className="form-control"
                placeholder="Enter your dueDate Details"
                name="dueDate"
                value={dueDate}
                onChange={(e) => onInputChange(e)}
              />
              {dueDate==0?<p style={{"color":"red"}}>*Enter Data</p>:null}
            </div>
            
            <div className="mb-2">
              <label htmlFor="createdby" className="form-label">
                createdby
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your createdby"
                name="createdby"
                value={createdby}
                onChange={(e) => onInputChange(e)}
              />
              {createdby==0?<p style={{"color":"red"}}>*Enter Data</p>:null}
            </div>
           

            <div className="mb-2">
              <label htmlFor="createddate" className="form-label">
                 Created Date
              </label>
              <input
                type={'date'}
                className="form-control"
                placeholder="Enter your createddate"
                name="createddate"
                value={createddate}
                onChange={(e) => onInputChange(e)}
              />
              {createddate==0?<p style={{"color":"red"}}>*Enter Data</p>:null}
            </div>

            
            <button type="submit" disabled={customer==0||jobDescription==0||primaryTechnology==0||createdby==0||dueDate==0||createddate==0} className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-1" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
