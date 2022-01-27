import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { ProductList } from "./products/productList"
import { LocationList } from "./locations/locationList"
import { Employees } from "./employees/employees"


export const KandyKorner = () => {

    return (
        <>
            <NavBar />
            <ApplicationViews />
            <Route exact path="/products">
                <ProductList />
            </Route>
            <Route path="/locations">
                <LocationList />
            </Route>
            <Route path="/employees">
                <Employees />
            </Route>
        </>
    )


}