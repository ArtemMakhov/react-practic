import { getCustomers } from "components/fakeApi";
import { useMemo } from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBox } from "../../components/SearchBox";

export const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterParam = searchParams.get('filter') ?? "";

    useEffect(() => {
        getCustomers().then(setCustomers);
    }, []);
    
    const changeFilter = value => {
        setSearchParams(value !== '' ? { filter: value } : {});
    };

    const visibleCustomers = useMemo(() => {
        return customers.filter(customer =>
            customer.name.toLowerCase().includes(filterParam.toLocaleLowerCase())
        );
    }, [customers, filterParam]);

    return <main>
        <SearchBox value={filterParam} onChange={changeFilter} />
        {visibleCustomers.length > 0 && (
            <ul>
                {visibleCustomers.map(customer => (
                    <li key={customer.id}>{customer.name}</li>
                ))}
            </ul>
        )}
    </main>;
};