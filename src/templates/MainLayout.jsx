import NavigationBar from '../components/NavigationBar';
import { Box, Container } from "@mui/material";
import Footer from '../components/Footer';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <NavigationBar />
            <Container sx={{ flex: 1, mt: 3 }}>
                <Outlet/>
            </Container>
        <Footer />
        </Box>
    );
};


export default MainLayout;