import React,{useEffect, useState}from 'react'

export default function Searchfilter() {
    const[data,setData]=useState([]);
    useEffect(()=>{
         const fetchData=()=>{
            fetch('http://localhost:8080/employees')
            .then(response =>response.employees())
            .then(employees => console.log(employees))
                 setData(employees)
         }

          fetchData();
    },[])
  return (
    <div>Search Filter</div>
  )
}
