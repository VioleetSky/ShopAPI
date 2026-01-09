import {Grid, Card, CardMedia, Typography, CardContent, CardActions, Button, Box, Alert} from "@mui/material";
import Rating from "../../components/Rating.jsx";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {addToCartList} from "../../features/slice/shoppingCartList.jsx";
import CheckIcon from "@mui/icons-material/Check";
import {addToList, removeFromList} from "../../features/slice/favoriteListSlice.jsx";

export default function CardProductForCatalog({product}) {
    const favoriteProducts = useSelector(state => state.favoriteList?.list ?? []);
    const [addCart, setAddCart] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const favoriteInList = favoriteProducts.some((item) => (item.id === product?.id));
    const titleLenght = (title) => {
        if (title.length <= 22) return title;
        const newTitle = title.split("").slice(0, 22).join("");
        return newTitle + "...";
    }

    const handleClickCart = () => {
        setAddCart(true);
        dispatch(addToCartList(product));
        console.log("click to cart");
        setTimeout(() => {
            setAddCart(false);
        }, 1000)
    }
    const handleClickHeart = () => {
        if (favoriteInList) {
            dispatch(removeFromList(product))
        } else {
            dispatch(addToList(product));
        }
    }
    const handleClickProduct = () => {
        navigate(`/goods/${product.id}`);
    }

    return (<>
        <Grid
            container
            spacing={3}
            justifyContent="center"
        >
            <Card sx={{
                width:  {
                    md: 270,
                    sm: 230,
                    xs: 200,
                },
                maxHeight: {
                    xl: 420,
                    lg: 400,
                    md: 400,
                    sm: 380,
                    xs: 330,
                },
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                px: "10px",
                borderRadius: "16px"
            }}>
                <Box onClick={() => handleClickProduct()} sx={{cursor: "pointer"}}>
                    <CardContent
                    sx={{p:0}}
                    >
                        <Box
                            sx={{bgcolor: "background.paper",
                                position: "relative"}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.images[0]}
                                alt={product.title}
                                sx={{
                                    objectFit: 'contain',
                                }}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "-9px",
                                    right: "1px"
                            }}>
                                <Rating number={product.rating}/>
                            </Box>

                        </Box>
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "2px",
                                '&:last-child': {
                                    paddingBottom: 0}
                        }}>
                            <Typography gutterBottom variant="h5" component="div"
                                        sx={{
                                            fontSize: {
                                            xl: "20px",
                                            lg: "20px",
                                            md: "16px",
                                            sm: "14px",
                                            xs: "12px",
                                            },
                                            fontWeight: 600,
                                            whiteSpace: "nowrap"
                            }}>
                                {titleLenght(product.title)}
                            </Typography>
                            <Typography variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            fontSize: {
                                                xl: "20px",
                                                lg: "20px",
                                                md: "16px",
                                                sm: "14px",
                                                xs: "12px",
                                            },}}>
                                {product.brand}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xl: "20px",
                                        lg: "20px",
                                        md: "16px",
                                        sm: "14px",
                                        xs: "12px",
                                    },
                                    fontWeight: 400
                            }}>
                                ${product.price}
                            </Typography>
                            <Typography sx={{
                                textAlign: "end",
                                color: product.stock > 10 ? "green" : "red",
                                fontSize: {
                                    xl: "15px",
                                    lg: "15px",
                                    md: "13px",
                                    sm: "12px",
                                    xs: "11px",
                                },
                            }}> <span>In Stock: </span> {product.stock}</Typography>
                        </CardContent>
                    </CardContent>
                </Box>
                <CardActions sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Button onClick={() => handleClickCart()}
                            size="small"
                            color="primary"
                            sx={{
                        borderRadius: "8px",
                        bgcolor: "primary.main",
                        color: "background.default",
                        width: "100px"
                    }}>
                        Buy
                    </Button>
                    <Button disableRipple onClick={handleClickHeart} sx={{
                        display: "flex",
                        alignItems: "center",
                        "&:hover": {backgroundColor: "transparent",
                        }
                    }}>
                        {favoriteInList ? <FavoriteIcon sx={{ color: "#e01b7a"}}/> : <FavoriteBorderIcon sx={{ color: "#e01b7a"}}/>}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        {addCart ? <Alert sx={{
            mb: 2,
            position: "fixed",
            bottom: 16,
            left: 16,
            zIndex: (theme) => theme.zIndex.snackbar,
            backgroundColor: "#E1F9E5",
        }} icon={<CheckIcon fontSize="inherit"/>} severity="success">
            Product added to cart
        </Alert> : null}
    </>)

}