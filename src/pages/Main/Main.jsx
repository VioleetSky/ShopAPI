import {useGetPostByIdQuery} from "../../features/slice/apiSlice.jsx";
import {useState, useEffect} from "react";
import {Alert, Box, CircularProgress} from "@mui/material";
import Banner from "./Banner.jsx";
import CategoriesCards from "./CategoriesCards.jsx";
import {useLocation} from "react-router-dom";

function Main(){
    const[randomForBanner]=useState(() => Math.floor(Math.random() * 50) + 1);
    const {data, isLoading, error} = useGetPostByIdQuery(randomForBanner);
    const {hash} = useLocation();

    useEffect(()=>{
        if(hash){
            const element=document.querySelector("#categories");
            element?.scrollIntoView({behavior: "smooth"});
        }
    }, [hash]);
    if(error){
        return (
            <Alert severity="error">Data loading error</Alert>
        )
    }
    if(isLoading){
        return (<Box sx={{ display: 'flex' , justifyContent: 'center'}}>
            <CircularProgress />
        </Box>)
    }
    return <>
        <Banner product={data}/>
         <CategoriesCards/>
    </>
}
export default Main;