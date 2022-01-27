import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    //state hold an object
    const [employee, updateEmployee] = useState({
        name: "",
        location: "",
        manager: false,
        fullTime: false,
        hourlyRate: 1
    })
    const history = useHistory()

    const submitEmployee = (evt) => {
        evt.preventDefault()

        const newEmployee = {

            name: employee.name,
            locationId: employee.location,
            manager: employee.manager,
            fullTime: employee.manager,
            hourlyRate: employee.hourlyRate

        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")

            })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Hire New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.name = evt.target.value
                                updateEmployee(copy)
                            }
                        } />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Store Location: 123 Main Street </label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                // parse-inteprate/deconstruct  int- integer
                                //parse int is changing a string into an interger
                                copy.locationId = parseInt(evt.target.checked)
                                updateEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Store Location: 450 Sesame Street </label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                // parse-inteprate/deconstruct  int- integer
                                //parse int is changing a string into an interger
                                copy.locationId = parseInt(evt.target.checked)
                                updateEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Store Location: 101 Maple Road Drive </label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                // parse-inteprate/deconstruct  int- integer
                                //parse int is changing a string into an interger
                                copy.locationId = parseInt(evt.target.checked)
                                updateEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.manager = evt.target.checked
                                updateEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="full-time">Full-Time:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.fullTime = evt.target.checked
                                updateEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitEmployee}>
                Hire New Employee
            </button>
        </form>
    )
}