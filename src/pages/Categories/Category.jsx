import {useParams} from "react-router-dom";
import {useGetPostsByCategoryQuery} from "../../features/slice/apiSlice.jsx";
import {Alert, Box, CircularProgress, Grid} from "@mui/material";
import CardProductForCatalog from "../Catalog/CardProductForCatalog.jsx";

export default function Category(){
    const {category} = useParams();
    const {data, isLoading, error} = useGetPostsByCategoryQuery(category);

    if(error){
        return (
            <Alert severity="error">Помилка завантаження даних</Alert>
        )
    }
    if(isLoading){
        return (<Box sx={{ display: 'flex' , justifyContent: 'center'}}>
            <CircularProgress />
        </Box>)
    }

return(

        <Grid container spacing={3} sx={{mb:"120px"}}>
                {data.products.map((product) => (
                        <CardProductForCatalog product={product} />
                ))}
            </Grid>

)

}