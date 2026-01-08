import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import { useGetPostsQuery } from "../../../features/slice/apiSlice.jsx";

function SearchBar() {
    const { data } = useGetPostsQuery();
    const products = data?.products ?? [];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [inputValue, setInputValue] = useState("");

    return (
        <Autocomplete
            sx={{
                width: {
                    lg: "400px",
                    md: "350px",
                    sm: "300px",
                    xs: "250px",
                }
        }}
            options={inputValue ? products.filter(p => p.title.toLowerCase().includes(inputValue.toLowerCase())) : []}
            getOptionLabel={(option) => option.title}
            value={selectedProduct}
            onChange={(event, newValue) => setSelectedProduct(newValue)}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Search..."
                    variant="standard"
                    sx={{
                        '& .MuiInput-root:before': {
                            borderBottom: '1px solid lightgrey',
                        },
                        '& .MuiInput-root:hover:not(.Mui-disabled):before': {
                            borderBottom: '2px solid lightgrey',
                        },
                        '& .MuiInput-root:after': {
                            borderBottom: '2px solid grey',
                        },
                    }}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#818589' }} />
                            </InputAdornment>
                        ),
                    }}
                />
            )}
            noOptionsText="No products found"
        />
    );
}

export default SearchBar;
