import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavItem = styled(NavLink)`
padding:${p => p.theme.space[3]}px;
text-decoration: none;
color: ${p => p.theme.colors.text};
border-radius: 8px;

&.active{
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
}

:hover:not(.active){
    color: ${p => p.theme.colors.primary};
}
`;