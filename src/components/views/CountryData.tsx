import React, { useEffect, useState } from 'react'
import { Country } from '../types/types';
export default function CountryData(keyword:string) {
    const [countries, setCountries] = useState([]);
    const [filteredData, setFiltereddata] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);//setting initail data same for both state,..... 
                setFiltereddata(data);
            });

    }, []);

    useEffect(() => {
        let filteredData = countries.filter((country:Country) => {
            return (
                country.name.common
                    .toLowerCase()
                    .search(keyword.toLocaleLowerCase()) !== -1);
        });
        setFiltereddata(filteredData);

    }, [keyword]);
    return [filteredData];
}

