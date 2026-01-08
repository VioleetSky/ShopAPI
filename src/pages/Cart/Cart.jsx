import { Box, DialogContent, DialogTitle, Card, Typography, Button, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeFromCartList } from "../../features/slice/shoppingCartList.jsx";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Cart() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.shoppingCartList.list);

    const total = Math.floor(
        products.reduce((total, item) => total + item.price * item.quantity, 0)
    )
    if (products.length === 0) {
        return (
            <Box sx={{
                p: 2,
                textAlign: "center"
            }}>
                <Typography
                    variant="h5"
                    mt={5}>
                    Cart is empty</Typography>
                <Typography color="text.secondary">But it's never too late to fix it :)</Typography>
            </Box>
        )
    }
    return (
        <Box sx={{
            p: { xs: 1, sm: 2 }
        }}>
            <DialogTitle sx={{
                p: 0,
                mb: 2,
                fontWeight: 700 }}>
                Cart
            </DialogTitle>
            <DialogContent sx={{ p: 0 }}>
                {products.map((product) => (
                    <Card
                        key={product.id}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: { xs: "flex-start", sm: "center" },
                            gap: 1.5,
                            p: 1.5,
                            mb: 2,
                            position: "relative",
                        }}>
                        <IconButton
                            onClick={() => dispatch(removeFromCartList(product.id))}
                            sx={{
                                position: { xs: "absolute", sm: "static" },
                                top: 5,
                                right: 5,
                                color: "error.main"
                            }}
                        >
                            <DeleteOutlineIcon fontSize="small" />
                        </IconButton>

                        <Box sx={{
                            display: "flex",
                            width: "100%",
                            gap: 1.5,
                            alignItems: "center"
                        }}>
                            <Box
                                component={Link}
                                to={`/goods/${product.id}`}
                                sx={{
                                    width: { xs: 50, sm: 70 },
                                    height: { xs: 50, sm: 70 },
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Box
                                    component="img"
                                    src={product.images?.[0]}
                                    alt={product.title}
                                    sx={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain"
                                }}
                                />
                            </Box>
                            <Box
                                component={Link}
                                 to={`/goods/${product.id}`}
                                sx={{
                                    textDecoration: "none",
                                    color: "text.primary",
                                    pr: 4
                            }}>
                                <Typography
                                    variant="subtitle2"
                                    fontWeight={700}
                                    sx={{ lineHeight: 1.2 }}>
                                    {product.title}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary">
                                    {product.brand}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mt: { xs: 1, sm: 0 },
                            borderTop: { xs: "1px solid #eee", sm: "none" },
                            pt: { xs: 1, sm: 0 }
                        }}>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <IconButton
                                    size="small"
                                    onClick={() => dispatch(decrementQuantity(product.id))}>
                                    <RemoveIcon fontSize="small" />
                                </IconButton>
                                <Typography
                                    sx={{
                                    mx: 1,
                                        fontSize: "0.9rem",
                                        fontWeight: 700
                                }}>
                                    {product.quantity}
                                </Typography>
                                <IconButton
                                    size="small"
                                    onClick={() => dispatch(incrementQuantity(product.id))}>
                                    <AddIcon fontSize="small" />
                                </IconButton>
                            </Box>
                            <Typography
                                fontWeight={800}
                                sx={{ fontSize: "1rem" }}>
                                ${Math.floor(product.price * product.quantity)}
                            </Typography>
                        </Box>
                    </Card>
                ))}
            </DialogContent>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    mt: 2,
                    p: 1,
                    borderTop: "2px solid",
                    borderColor: "divider"
                }}
            >
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Typography
                        color="text.secondary"
                        variant="body2"
                    >Total:</Typography>
                    <Typography
                        variant="h6"
                        fontWeight={800}
                    >${total}</Typography>
                </Box>

                <Button
                    component={Link}
                    to="/order"
                    variant="contained"
                    fullWidth
                    sx={{
                        bgcolor: "#006729",
                        "&:hover": { bgcolor: "#005220" },
                        py: 1.2,
                        fontWeight: 700,
                        fontSize: "0.9rem"
                    }}
                >
                    Checkout
                </Button>
            </Box>
        </Box>
    );
}

export default Cart;