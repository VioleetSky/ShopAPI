import { useParams } from "react-router-dom";
import { useGetPostsByCategoryQuery } from "../../features/slice/apiSlice.jsx";
import { Alert, Box, CircularProgress, Grid } from "@mui/material";
import CardProductForCatalog from "../Catalog/CardProductForCatalog.jsx";

export default function Category() {
    const { category } = useParams();
    const { data, isLoading, error } = useGetPostsByCategoryQuery(category);

    if (error) {
        return <Alert severity="error">Data loading error</Alert>;
    }

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: "120px",
                width: "100%",
            }}
        >
            <Grid
                container
                spacing={3}
                sx={{
                    mb: "60px",
                    px: 2,
                    width: "100%",
                }}
                justifyContent="center"
                alignItems="stretch">
                {data?.products.map((product) => (
                    <Grid
                        item
                        key={product.id}>
                        <CardProductForCatalog product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}