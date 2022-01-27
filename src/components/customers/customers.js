import React, { useEffect, useState } from "react"

export const Customers = () => {
    const [customers, modifyCustomers] = useState([]);



    useEffect(
        () => {
            fetch("http://localhost:8088/Customers")
                .then(response => response.json())
                .then((customersArray) => {
                    modifyCustomers(customersArray)
                })
        },
        []
    )


    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer---${customer.id}`}>{customer.name} </p>
                    }
                )
            }
        </>
    )
}