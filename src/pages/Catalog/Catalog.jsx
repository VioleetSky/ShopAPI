import {useGetPostsQuery} from "../../features/slice/apiSlice.jsx";
import {Alert, Box, Button, CircularProgress, Grid} from "@mui/material";
import CardProductForCatalog from "./CardProductForCatalog.jsx";
import _ from "lodash";
import {useSearchParams} from "react-router-dom";

function Catalog(){
    const PAGE_SIZE =10;
    const {data, isLoading, error} = useGetPostsQuery();
    const [searchParams, setSearchParams] = useSearchParams();
    const pagesFromUrl= Number(searchParams.get("page")) || 1;
    const currentPage = pagesFromUrl-1;
    const product=data?.products ?? []
    const pages= _.chunk(product, PAGE_SIZE);
    const safeCurrentPage = currentPage < pages.length ? currentPage : 0;

    console.log(product);
    const changePages=(page)=>
    {
        setSearchParams({page});
    }
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

    return <>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            mb: "120px",
            alignItems: "center",
            mt: "20px"
        }}>

            <Grid
                container
                spacing={3}
                  sx={{
                      mb: "60px",
                      px: 2
            }}
                justifyContent="center"
                alignItems="stretch">
                {pages[safeCurrentPage]?.map((product) => (
                    <CardProductForCatalog key={product.id} product={product} />
                ))}
            </Grid>

            <Box>
                {pages.map((_, index) => (
                    <Button
                        key={index}
                        variant={index === safeCurrentPage ? "contained" : "outlined"}
                        onClick={() => changePages(index + 1)}
                        sx={{ mr: 1 }}
                    >
                        {index + 1}
                    </Button>
                ))}
            </Box>
        </Box>
    </>

}

export default Catalog;