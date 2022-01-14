import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, modifyProducts] = useState([]);
    const [candyType, showType] = useState("")


    useEffect(
        () => {
            fetch("http://localhost:8088/Products?_expand=productType")
                .then(response => response.json())
                .then((productsArray) => {
                    modifyProducts(productsArray)
                })
        },
        []
    )

    useEffect(
        () => {
            const onlyProductType = products.map(product => product.productType.name)

            showType(onlyProductType.join(","))
        },
        [products]
    )
    return (
        <>
            <div>
                Product Types: {candyType}
            </div>
            {
                products.map(
                    (product) => {
                        return <p key={`product---${product.id}`}>{product.name} costs ${product.price} {product.productType.name} </p>
                    }
                )
            }
        </>
    )
}