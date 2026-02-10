import React from 'react'
import { SubemployeeList } from './SubemployeeList'

export const EmployeeList = (props) => {
    console.log("emplist" ,props);
  return (
    <div style={{textAlign:"center"}}>
        <h1> Employee List </h1>
        {props.title}
        <h2>{props.company.name}</h2>
        <h2>{props.company.year}</h2>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((emp) => {
                         return (
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                            </tr>
                         )
                    })
                }
            </tbody>
        </table>
        <SubemployeeList title={props.title}></SubemployeeList>
    </div>
  )
}
