import { useEffect, useState } from "react";

export default function Jobs() {

    const [searchValue, setSearchValue] = useState(null);
    const [backendCalloutInitiated, setBackendCalloutInitiated] = useState(false);

    useEffect(() => {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        setSearchValue(params.content);

        if (params.content && !backendCalloutInitiated) {
            // DO BACKEND CALLOUT TO FETCH DATA BASED ON "params.content"
            setBackendCalloutInitiated(true);
        }
    }, []);

    return (
        <div className="container">
            <p>JOBS</p>
            <br />
            <p>{searchValue}</p>
        </div>
    );
}