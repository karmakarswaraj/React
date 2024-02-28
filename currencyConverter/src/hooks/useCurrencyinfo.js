import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    useEffect(() => {
        const fetchData = async () => { //async function to fetch
            const response = await fetch(url);
            const result = await response.json(); //handle the json file 
            setData(result[currency]);//set the value
            fetchData(); //function call 
        }
    }, [currency]);
    return data;
}
export default useCurrencyInfo;