import React, { useEffect, useState } from "react"

export const LocationList = () => {

    const [locations, modifyLocations] = useState([]);

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(response => response.json())
                .then((locationsArray) => {
                    modifyLocations(locationsArray)
                })
        },
        []
    )
    return (
        <>
            {
                locations.map(
                    (location) => {
                        return <p key={`location---${location.id}`}>{location.address}</p>
                    }
                )
            }
        </>
    )
}