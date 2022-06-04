
import React, { useCallback, useEffect, useState } from 'react';
import '../../App.css'
import CountryTable from '../views/CountryTable';
import Search from '../Navigation/Search';
import CountryData from '../views/CountryData';
function Home() {

    const [keyword, setKeyword] = useState("");
    const [filteredData] = CountryData(keyword);

    const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    },[keyword]);
    
    return (
        <div className='home'>
            <div className='search'>
                <Search value={keyword} handleChange={handleChange} />
            </div>
            <CountryTable countries={filteredData} />
        </div>


    );
}

export default Home;
