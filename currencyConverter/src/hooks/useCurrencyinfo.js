import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    let url = `https://exchange-rates.abstractapi.com/v1/live/?api_key=4eaa7e9c5b504eb88ba8e039d4f472c3&base=${currency}`

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