import { Box, Container, Typography, Card, CardMedia, CardContent, Button, Alert, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addToCartList } from "../../features/slice/shoppingCartList.jsx";
import { removeFromList } from "../../features/slice/favoriteListSlice.jsx";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from "react";

export default function FavoriteList() {
    const products = useSelector(state => state.favoriteList?.list ?? [])
    const dispatch = useDispatch();
    const [addCart, setAddCart] = useState(false);

    const handleRemoveFromFavorite = (product) => {
        dispatch(removeFromList(product));
    }

    const handleAddToCart = (product) => {
        setAddCart(true);
        dispatch(addToCartList(product));
        setTimeout(() => {
            setAddCart(false);
        }, 2000)
    }

    return (
        <Container sx={{ mb: "120px", mt: "20px" }}>
            <Typography variant="h4" component="p" gutterBottom>
                Favorite List
            </Typography>

            {products.length === 0 ? (
                <Box>
                    <Typography textAlign="center" variant="h6">
                        Favorite list is empty :(
                    </Typography>
                </Box>
            ) : (
                <Box>
                    {products?.map(product => (
                        <Card
                            key={product.id}
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "center",
                                gap: 3,
                                bgcolor: "background.default",
                                p: 3,
                                mb: 2,
                                position: "relative"
                            }}>

                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                flex: 1,
                                gap: 2,
                                width: "100%"
                            }}>
                                <Box
                                    component={Link}
                                    to={`/goods/${product.id}`}
                                    sx={{
                                        width: "100px",
                                        height: "100px",
                                        display: "flex",
                                        alignItems: "center",
                                        flexShrink: 0
                                    }}>
                                    <CardMedia
                                        component="img"
                                        image={product?.images?.[0]}
                                        title={product.title}
                                        sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                                    />
                                </Box>

                                <CardContent
                                    component={Link}
                                    to={`/goods/${product.id}`}
                                    sx={{ p: "0 !important", textDecoration: "none", flex: 1 }}
                                >
                                    <Typography variant="h5" component="div" color="primary.main">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.brand}
                                    </Typography>
                                </CardContent>
                            </Box>

                            <Box sx={{ minWidth: "100px", textAlign: { xs: "left", md: "center" }, width: { xs: "100%", md: "auto" } }}>
                                <Typography variant="h6" component="p">
                                    ${product.price}
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                width: { xs: "100%", md: "auto" }
                            }}>
                                <Button
                                    onClick={() => handleAddToCart(product)}
                                    size="small"
                                    sx={{
                                        border: "1px solid #202226",
                                        color: "#202226",
                                        p: 1,
                                        flex: { xs: 1, md: "none" },
                                        minWidth: { md: "150px" }
                                    }}
                                >
                                    Add to cart
                                </Button>

                                <IconButton
                                    onClick={() => handleRemoveFromFavorite(product)}
                                    sx={{
                                        border: "1px solid #202226",
                                        borderRadius: "4px",
                                        p: "7px",
                                        color: "#202226"
                                    }}
                                >
                                    <DeleteOutlineIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Card>
                    ))}
                </Box>
            )}

            {addCart && (
                <Alert
                    sx={{
                        position: "fixed",
                        bottom: 16,
                        left: 16,
                        zIndex: (theme) => theme.zIndex.snackbar,
                        backgroundColor: "#E1F9E5",
                    }}
                    icon={<CheckIcon fontSize="inherit"/>}
                    severity="success"
                >
                    Product added to cart
                </Alert>
            )}
        </Container>
    )
}