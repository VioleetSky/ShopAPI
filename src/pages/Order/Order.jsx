import {
    Box,
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Divider,
    TextField,
    FormLabel,
    FormControlLabel,
    FormControl,
    Radio,
    RadioGroup,
    Dialog,
    IconButton,
} from '@mui/material';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {incrementQuantity, decrementQuantity, removeFromCartList, emptyCart} from "../../features/slice/shoppingCartList.jsx";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import {useNavigate} from "react-router-dom";

function Order() {
    const products = useSelector((state) => state.shoppingCartList?.list ?? []);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: "", email: "", phone: "", city: "", street: "", houseNumber: "", apartmentNumber: "",
    });

    const total = Math.floor(products.reduce((total, item) => total + item.price * item.quantity, 0));

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const styleForTextInput = {
        "& .MuiInput-underline:before": { borderBottomColor: "primary.main" },
        "& .MuiInput-underline:hover:before": { borderBottomColor: "primary.main" },
        "& .MuiInput-underline:after": { borderBottomColor: "primary.main" },
        "& .MuiInputLabel-root": { color: "primary.main" },
        "& .MuiInputLabel-root.Mui-focused": { color: "primary.main" },
        "& .MuiInputBase-input": { color: "primary.main" },
        width: "100%",
        my: 1
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleOpen();
        setTimeout(() => {
            dispatch(emptyCart());
        }, 4000);
    };

    const handleChange = (e) => {
        setForm(prevState => ({...prevState, [e.target.name]: e.target.value}));
    };

    if (products.length === 0 && !open) {
        navigate("/");
        return null;
    }

    const undoHoverAndClickOnButton = {
        minWidth: "40px",
        "&:hover": { backgroundColor: "transparent" },
        "&:focus": { outline: "none" }
    };

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Стовпчик на мобільних, рядок на десктопі
                gap: { xs: 4, lg: 10 },
                mb: "100px",
                mt: "20px"
            }}
        >
            {/* Ліва частина: Список товарів */}
            <Box sx={{ flex: 1, width: "100%" }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: 1, sm: 0 }
                }}>
                    <Typography sx={{ fontSize: { xs: "24px", md: "30px" }, fontWeight: 400, py: 2 }}>
                        Your order
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "20px", md: "25px" }, fontWeight: 400 }}>
                        ${total}
                    </Typography>
                </Box>

                <Divider />

                <Box sx={{
                    maxHeight: { md: "600px" },
                    overflowY: "auto",
                    pr: { md: 1 }
                }}>
                    {products?.map((product) => (
                        <Card key={product.id} sx={{ bgcolor: "transparent", pt: 2, borderRadius: 0, boxShadow: "none" }}>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Box component={Link} to={`/goods/${product.id}`} sx={{ width: "100px", height: "100px", flexShrink: 0 }}>
                                    <CardMedia
                                        component="img"
                                        image={product?.images?.[0]}
                                        sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                                    />
                                </Box>
                                <CardContent sx={{ p: 0, flex: 1 }}>
                                    <Typography sx={{ fontSize: "18px", lineHeight: "1.2" }}>{product.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{product.brand}</Typography>
                                    <Typography sx={{ fontWeight: 600, mt: 1 }}>${product.price}</Typography>
                                </CardContent>
                            </Box>

                            <CardActions sx={{ justifyContent: "space-between", px: 0 }}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Button sx={undoHoverAndClickOnButton} onClick={() => dispatch(decrementQuantity(product.id))}>
                                        <RemoveIcon fontSize="small" />
                                    </Button>
                                    <Typography sx={{ mx: 1 }}>{product.quantity}</Typography>
                                    <Button sx={undoHoverAndClickOnButton} onClick={() => dispatch(incrementQuantity(product.id))}>
                                        <AddIcon fontSize="small" />
                                    </Button>
                                </Box>
                                <IconButton onClick={() => dispatch(removeFromCartList(product.id))} color="error">
                                    <DeleteOutlineIcon fontSize="small" />
                                </IconButton>
                            </CardActions>
                            <Divider sx={{ mt: 1 }} />
                        </Card>
                    ))}
                </Box>
            </Box>

            {/* Права частина: Форма оформлення */}
            <Box sx={{ flex: 1.2, width: "100%" }}>
                <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: "28px", md: "34px" } }}>
                    Ordering
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                    <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>Personal data</Typography>
                    <TextField label="Enter your name" name="name" value={form.name} onChange={handleChange} required variant="standard" sx={styleForTextInput} />
                    <TextField label="Enter your email" name="email" type="email" value={form.email} onChange={handleChange} required variant="standard" sx={styleForTextInput} />
                    <TextField label="Enter your phone number" name="phone" type="tel" value={form.phone} onChange={handleChange} required variant="standard" sx={styleForTextInput} />

                    <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>Shipping information</Typography>
                    <TextField label="Enter city" name="city" value={form.city} onChange={handleChange} required variant="standard" sx={styleForTextInput} />
                    <TextField label="Enter street" name="street" value={form.street} onChange={handleChange} required variant="standard" sx={styleForTextInput} />

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <TextField label="House" name="houseNumber" value={form.houseNumber} onChange={handleChange} required variant="standard" sx={styleForTextInput} />
                        <TextField label="Apartment" name="apartmentNumber" value={form.apartmentNumber} onChange={handleChange} required variant="standard" sx={styleForTextInput} />
                    </Box>

                    <FormControl component="fieldset" sx={{ mt: 3, width: "100%" }}>
                        <FormLabel sx={{ fontSize: '18px', mb: 1, color: "text.primary" }}>Delivery methods</FormLabel>
                        <RadioGroup defaultValue="post" name="delivery-method">
                            <FormControlLabel value="company" control={<Radio />} label="By transport company" />
                            <FormControlLabel value="post" control={<Radio />} label="By post (up to 10 kg)" />
                            <FormControlLabel value="pickup" control={<Radio />} label="Pickup from warehouse" />
                            <FormControlLabel value="courier" control={<Radio />} label="By courier (Kyiv region)" />
                        </RadioGroup>
                    </FormControl>

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth={true}
                        sx={{
                            mt: 4,
                            bgcolor: "primary.main",
                            color: "white",
                            py: 1.5,
                            borderRadius: "8px",
                            "&:hover": { bgcolor: "primary.dark" }
                        }}
                    >
                        Place an order
                    </Button>
                </Box>
            </Box>

            {/* Діалог підтвердження */}
            <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth PaperProps={{ sx: { borderRadius: "16px", p: 4 } }}>
                <IconButton sx={{ position: "absolute", right: 8, top: 8 }} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
                <Box sx={{ textAlign: "center", pt: 2 }}>
                    <Typography variant="h6" sx={{ whiteSpace: 'pre-line' }}>
                        {`Thank you for your order!\nA consultant will contact you soon.`}
                    </Typography>
                </Box>
            </Dialog>
        </Container>
    );
}

export default Order;