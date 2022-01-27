import React from "react"
import { Route } from "react-router-dom"
import { ProductList } from "./products/productList.js"
import { LocationList } from "./locations/locationList.js"
import { Employees } from "./employees/employees.js"
import { EmployeeForm } from "./employees/employeeForm.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/products">
                <ProductList />
            </Route>

            <Route path="/locations">
                <LocationList />
            </Route>

            <Route path exact="/employees">
                <Employees />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

        </>
    )
}