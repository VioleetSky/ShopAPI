import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../features/slice/apiSlice.jsx";
import { useState, useEffect } from "react";
import Rating from "../../components/Rating.jsx";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';
import {
    Alert,
    Box,
    CircularProgress,
    Card,
    Container,
    CardContent,
    CardActions,
    Typography,
    CardMedia,
    Divider,
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    IconButton
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCartList } from "../../features/slice/shoppingCartList.jsx";
import { addToList, removeFromList } from "../../features/slice/favoriteListSlice.jsx";

function Goods() {
    const [addCart, setAddCart] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const { id } = useParams();
    const { data: product, isLoading, error } = useGetPostByIdQuery(id);
    const dispatch = useDispatch();
    const favoriteProducts = useSelector(state => state.favoriteList?.list ?? [])
    const isFavorite = favoriteProducts.some((item) => item.id === product?.id);

    useEffect(() => {
        setImageIndex(0);
    }, [id]);

    if (error) return <Alert severity="error">Data loading error</Alert>;
    if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;

    const handleClickHeart = () => {
        if (isFavorite) {
            dispatch(removeFromList(product));
        } else {
            dispatch(addToList(product));
        }
    };

    const handleClickCart = () => {
        setAddCart(true);
        dispatch(addToCartList(product));
        setTimeout(() => setAddCart(false), 2000);
    };

    const handlerClickArrow = () => {
        if (product?.images) {
            setImageIndex(prev => prev === product.images.length - 1 ? 0 : prev + 1);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 2, mb: 12 }}>
            {addCart && (
                <Alert sx={{
                    position: "fixed", bottom: 24, left: 24,
                    zIndex: (theme) => theme.zIndex.snackbar,
                    backgroundColor: "#E1F9E5",
                }} icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Product added to cart
                </Alert>
            )}

            {product && (
                <>
                    <Card sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 2, md: 6 },
                        borderRadius: "16px",
                        p: { xs: 2, sm: 4 },
                        boxShadow: "none",
                        border: "1px solid #F0F0F0"
                    }}>
                        <Box sx={{
                            display: 'flex',
                            position: "relative",
                            justifyContent: 'center',
                            alignItems: "center",
                            bgcolor: "#F9F9F9",
                            flexBasis: { xs: "100%", md: "50%" },
                            borderRadius: "12px",
                            height: { xs: "300px", sm: "400px", md: "500px" }
                        }}>
                            <CardMedia
                                component="img"
                                src={product?.images?.[imageIndex]}
                                sx={{
                                    objectFit: "contain",
                                    width: "100%",
                                    height: "100%",
                                    p: 2
                                }}
                            />
                            {product?.images?.length > 1 && (
                                <IconButton
                                    onClick={handlerClickArrow}
                                    sx={{
                                        position: "absolute",
                                        right: 16,
                                        bgcolor: "background.paper",
                                        boxShadow: 2,
                                        "&:hover": { bgcolor: "background.paper" }
                                    }}
                                >
                                    <ArrowForwardIosIcon fontSize="small" />
                                </IconButton>
                            )}
                        </Box>

                        <CardContent sx={{ flex: 1, p: "0 !important", display: "flex", flexDirection: "column" }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: "24px", sm: "32px", md: "40px" },
                                    fontWeight: 400,
                                    mb: 1
                                }}
                            >
                                {product.title}
                            </Typography>

                            <Box sx={{ mb: 4 }}>
                                <Rating number={product.rating} />
                            </Box>

                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: "auto" }}>
                                <Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                        <Typography variant="body1">{product.brand}</Typography>
                                        <Typography variant="caption" color="text.secondary">Brand</Typography>
                                    </Box>
                                    <Divider />
                                </Box>
                                <Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                        <Typography variant="body1">{product.sku}</Typography>
                                        <Typography variant="caption" color="text.secondary">Sku</Typography>
                                    </Box>
                                    <Divider />
                                </Box>
                                <Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                        <Typography variant="body1">{product.category?.toUpperCase()}</Typography>
                                        <Typography variant="caption" color="text.secondary">Category</Typography>
                                    </Box>
                                    <Divider />
                                </Box>
                            </Box>

                            <Typography variant="h4" sx={{ fontWeight: 600, color: "primary.main", my: 4 }}>
                                ${product.price}
                            </Typography>

                            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
                                <Button
                                    fullWidth
                                    onClick={handleClickCart}
                                    sx={{
                                        border: "1px solid #161616",
                                        color: "#161616",
                                        py: 1.5,
                                        borderRadius: "8px",
                                        textTransform: "none"
                                    }}
                                >
                                    Add to cart
                                </Button>
                                <Button
                                    fullWidth
                                    onClick={handleClickHeart}
                                    sx={{
                                        bgcolor: isFavorite ? "error.light" : "primary.main",
                                        color: "white",
                                        py: 1.5,
                                        borderRadius: "8px",
                                        textTransform: "none",
                                        "&:hover": { bgcolor: isFavorite ? "error.main" : "primary.dark" }
                                    }}
                                >
                                    {isFavorite ? "Remove from favorite" : "Add to favorite"}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>Description</Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.secondary", maxWidth: "800px" }}>
                            {product.description}
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 10 }}>
                        <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>Characteristics</Typography>
                        <TableContainer sx={{ border: "1px solid #F0F0F0", borderRadius: "12px" }}>
                            <Table>
                                <TableBody>
                                    {[
                                        ["Warranty", product.warrantyInformation],
                                        ["Shipping", product.shippingInformation],
                                        ["Return Policy", product.returnPolicy],
                                        ["Weight", product.weight ? `${product.weight} kg` : null],
                                        ["Dimensions", product.dimensions ? `${product.dimensions.width}x${product.dimensions.height}x${product.dimensions.depth} cm` : null]
                                    ].map(([label, value]) => (
                                        <TableRow key={label}>
                                            <TableCell sx={{ fontWeight: 500, bgcolor: "#FAFAFA", width: { xs: "40%", md: "30%" } }}>{label}</TableCell>
                                            <TableCell>{value || "No data"}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box sx={{ mt: 10 }}>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 500 }}>Reviews</Typography>
                        {product?.reviews?.map((review, idx) => (
                            <Box key={idx} sx={{
                                border: "1px solid #F4F5F8",
                                borderRadius: "16px",
                                p: 3,
                                mb: 3,
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                justifyContent: "space-between",
                                gap: 2
                            }}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600 }}>{review.reviewerName}</Typography>
                                    <Rating number={review.rating} />
                                    <Typography sx={{ mt: 2, color: "text.secondary" }}>{review.comment}</Typography>
                                </Box>
                                <Typography variant="caption" sx={{ color: "text.secondary", minWidth: "100px", textAlign: { sm: "right" } }}>
                                    {new Date(review.date).toLocaleDateString('uk-UA')}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </>
            )}
        </Container>
    );
}

export default Goods;