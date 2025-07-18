import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => res.rates)
        .then((res) => setData(res))
    }, [currency, data])

    return data
}

export default useCurrencyInfo