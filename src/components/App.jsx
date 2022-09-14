import { Toaster } from "react-hot-toast";
import { Route,Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";



import { Layout } from './Layout';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="dashboard" element={<div>Dashboard</div>} />
                    <Route path="sales" element={<div>Sales</div>} />
                    <Route path="reports" element={<div>Reports</div>} />
                    <Route path="feedback" element={<div>Feedback</div>} />
                    <Route path="customers" element={<div>Customers</div>}/>
                </Route>
            </Routes>
            <GlobalStyle />
            <Toaster position='top-right' reverseOrder={false} />
        </>
    );
};