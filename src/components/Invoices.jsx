import { useState, useEffect } from "react";
import {  Outlet } from "react-router-dom";
import { NavItem } from './Invoices.styled';
import { Box } from "./Box";
import { getInvoices } from "./fakeApi";

 const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        getInvoices().then(setInvoices)
    }, []);

    return (
        <Box display="flex">
            <Box
                as="aside"
                display="flex"
                p={4}
                flexDirection="column"
                borderRight="1px solid black"
            >
                {invoices.map(({ id }) => <NavItem key={id} to={`${id}`}>{id}</NavItem>)}
            </Box>
            <Outlet/>
        </Box>
    )
}
export default Invoices;