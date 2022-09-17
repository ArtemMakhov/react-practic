import { Outlet } from "react-router-dom";
import { Box } from "components/Box";
import { NavItem } from "./Sales.styled";


const navItems = [
    { href: 'analytics', text: 'Analytics' },
    { href: 'invoices', text: 'Invoices' },
    { href: 'deposits', text: 'Deposits' },
];

 const Sales = () => {
    return (
        <Box as="main" display="flex" flexDirection="column">
            <Box as="header" borderBottom="1px solid black" p={4}>
                <Box as="ul" display="flex">
                    {navItems.map(({href,text}) => (
                        <NavItem to={href} key={href}>
                            {text}
                        </NavItem>
                    ))}
                </Box>
            </Box>
            <Outlet/>
        </Box>
    );
};

export default Sales;