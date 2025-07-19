import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                console.log("Fetched data:", res[currency]); // Correct place to log
            })
            .catch((err) => console.error("Failed to fetch currency data:", err));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
