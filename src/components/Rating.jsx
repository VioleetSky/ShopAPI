import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import {Box} from "@mui/material";

export default function Rating({number}){
const numberRating = number >5 ? 5: number;
let arrRating=[];
const fullStars= Math.floor(numberRating);
const remainder= numberRating %1;

for(let i=0;i<fullStars;i++){
    arrRating.push(<StarIcon sx={{color:"#FFDE21"}} key={`full-${i}`}/>);
}
if(remainder>0.3){
    if(remainder>0.8) arrRating.push(<StarIcon sx={{color:"#FFDE21"}} key={`remainder`}/>);
    else arrRating.push(<StarHalfIcon sx={{color:"#FFDE21"}} key={`half`}/>);
}

while(arrRating.length < 5){
    arrRating.push(<StarOutlineIcon sx={{color:"#FFDE21"}} key={`starOutline`}/>);
}

return (
    <Box sx={{py:1, px:0, m:0}}>
        {arrRating}
    </Box>
)
}