import PropTypes from 'prop-types';
import { Box, Container } from "@mui/material";
import {Outlet} from "react-router-dom";

const EmptyLayout = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Container sx={{ flex: 1, mt: 3 }}>
                <Outlet/>
            </Container>
        </Box>
    );
};

EmptyLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default EmptyLayout;