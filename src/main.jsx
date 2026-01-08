import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import {store} from "./features/store.jsx";
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        primary: {
            main: '#202226',
        },
        background: {
            paper: "#F4F5F8",
            default: "#FFFFFF",
        },
        text: {
            primary: "#161616",
            secondary: "#757575",
        },
    },
    typography: {
        fontFamily: [
            '"Golos Text"',
            'sans-serif',
        ].join(','),
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CssBaseline />
                <AppRouter />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);