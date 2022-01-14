import React from "react"
import { LocationList } from "./locations/locationList.js"
import { ProductList } from "./products/productList.js"

export const KandyKorner = () => {

    return (
        <>
            <h1>Kandy Korner</h1>

            <h2>Store Locations</h2>
            <LocationList />

            <h2>Products</h2>
            <ProductList />

        </>
    )
}