import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";
import { MaterialEditorForm } from "./MaterialEditorForm/MaterialEditorForm";

export class App extends Component {
    render() {
        return (
            <Box>
                <MaterialEditorForm/>
                <GlobalStyle />
            </Box>
        );
    }
}