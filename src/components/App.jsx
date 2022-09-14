import { Toaster } from "react-hot-toast";
import { Route,Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";



import { Layout } from './Layout';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    
                </Route>
            </Routes>
            <GlobalStyle />
            <Toaster position='top-right' reverseOrder={false} />
        </>
    );
};