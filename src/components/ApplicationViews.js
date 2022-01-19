import React from "react"
import { Route } from "react-router-dom"
import { ProductList } from "./products/productList.js"
import { LocationList } from "./locations/locationList.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/products">
                <ProductList />
            </Route>
            <Route path="/locations">
                <LocationList />
            </Route>

        </>
    )
}