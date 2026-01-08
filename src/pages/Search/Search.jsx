import {Box, Typography} from "@mui/material";
import SearchBar from "./searchComponents/SearchBar.jsx";
import {useGetCategoryListQuery} from "../../features/slice/apiSlice.jsx";
import { Link} from "react-router-dom";

export default function Search(){
    const {data} = useGetCategoryListQuery();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Box
            sx={{display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
<SearchBar/>
            </Box>
        <Box
        sx={{
            display: "flex",
            flexDirection: "column"
        }}
        >
            <Typography my="15px"
                        variant="h4"
                        color="text.secondary`"
            >Categories</Typography>
            {
               data ?  data.map(category=>(
                    <Box
                    component={Link}
                    to={("/category/"+category)}
                    sx={{
                    pb: "10px",
                    textDecoration: "none",
                    color: "primary.main"
                    }}
                    >{category.toUpperCase()}</Box>
                )) : null
            }
        </Box>

    </Box>
    )
}