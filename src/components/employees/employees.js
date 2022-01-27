import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const Employees = () => {

    const [employees, modifyEmployees] = useState([]);
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(response => response.json())
                .then((employeesArray) => {
                    modifyEmployees(employeesArray)
                })
        },
        []
    )
    return (
        <>
            <h1>Employees</h1>
            {
                employees.map(
                    (employee) => {
                        return <p key={`location---${employee.id}`}>{employee.name}</p>
                    }
                )
            }
            < div >
                <button onClick={() => history.push("/employees/create")}>Create Ticket</button>
            </div >
        </>
    )
}