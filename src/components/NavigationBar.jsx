    import React from 'react';
    import {
        AppBar,
        Toolbar,
        Button,
        Box,
        Container,
        Dialog,
        IconButton,
        useMediaQuery,
        useTheme,
    } from '@mui/material';
    import ApiIcon from '@mui/icons-material/Api';
    import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
    import SearchIcon from '@mui/icons-material/Search';
    import CloseIcon from "@mui/icons-material/Close";
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import SearchBar from "../pages/Search/searchComponents/SearchBar.jsx";
    import {Link, useLocation, useNavigate} from 'react-router-dom';
    import {useState, useEffect} from "react";
    import Cart from "../pages/Cart/Cart.jsx";
    import {useSelector} from "react-redux";

    const NavigationBar = () => {
        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('md'));
        const products=useSelector(state=>state.shoppingCartList?.list ?? []);
        const favoriteProducts=useSelector(state=>state.favoriteList?.list ?? []);
        const [openCart, setOpenCart] = useState(false);
        const location = useLocation();
        const navigate = useNavigate();
        const handleOpenCart = () => setOpenCart(true);
        const handleCloseCart = () => setOpenCart(false);

        const numberOfProducts=products.reduce((acc, product) => {
            return acc+product.quantity;
        },0);

        const numberOfFavorites= favoriteProducts.reduce((acc, product) => {
            return acc+1;
        }, 0)

        useEffect(() => {
            setOpenCart(false);
        }, [location.pathname]);

        return (
            <>
                <AppBar position="static" sx={{
                    width: '100%',
                    boxShadow: 'none',
                }}>
                    <Toolbar
                        disableGutters
                        sx={{
                            flexDirection: "column",
                            minHeight: 'auto',
                        }}>
                        <Box
                            sx={{
                                bgcolor: "background.paper",
                                width: "100%",
                                height: "55px",
                                p: 1,
                                display: "flex",
                                alignContent: "center",
                            }}>

                            <Container sx={{
                                display: "flex",
                                alignItems: "center",
                                color: "primary.main",
                                maxWidth: "40px",
                            }}>
                                <Box
                                    color="text.primary"
                                    component={Link}
                                    to="/"
                                > <ApiIcon/></Box>
                            </Container>

                            <Container sx={
                                {
                                    display: "flex",
                                    gap: {
                                        sm: 2,
                                        xs: "auto",
                                    },
                                    justifyContent: "flex-end",
                                    alignItems: "center"
                                }
                            }>

                                <Button
                                    component={Link}
                                    to="/catalog"
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: {
                                            xs: "10px",
                                            sm: "14px"
                                        },
                                    }}
                                >Catalog</Button>

                                <Button
                                    component={Link}
                                    to="/contacts"
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: {
                                            xs: "10px",
                                            sm: "14px"
                                        },
                                    }}>
                                    Contacts</Button>

                                <Button
                                    component={Link}
                                    to="/delivery"
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: {
                                            xs: "10px",
                                            sm: "14px"
                                        },
                                        textAlign: "center",
                                    }
                                    }>Delivery and payment</Button>
                            </Container>
                        </Box>

                        <Box
                            sx={{
                                width: "100%",
                                bgcolor: "background.default",
                                height: "100px",
                                py: "15px",
                            }}>

                            <Container sx={{
                                display: "flex",
                                gap: "5px",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                {isMobile ?
                                    (
                                        <Button
                                            sx={{
                                                minWidth: "auto",
                                                width: { xs: 36, sm: 44 },
                                                height: { xs: 36, sm: 44 },
                                                p: 0,
                                                mr: "13px",
                                                bgcolor: "background.paper",
                                            }}
                                            onClick={()=>navigate("/search")}
                                        >
                                            <SearchIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
                                        </Button>
                                    )
                                    :
                                    (
                                        <Container
                                        ><SearchBar/></Container>)}

                                <Box
                                sx={{
                                    display: "flex",
                                    gap: 3,
                                }}
                                >
                                <Button
                                    disableRipple
                                    onClick={() => handleOpenCart()}
                                    sx={{
                                        minWidth: "auto",
                                        width: { xs: 36, sm: 44 },
                                        height: { xs: 36, sm: 44 },
                                        p: 0,
                                        bgcolor: "background.paper",
                                        position: "relative",
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                        "&:active": {
                                            boxShadow: "none",
                                        },
                                        "&:focus": {
                                            outline: "none",
                                        }
                                    }}><ShoppingCartIcon sx={{ fontSize: { xs: 18, sm: 22 } }}/>
                                    {numberOfProducts > 0 ?
                                        <Box
                                            sx={{
                                                borderRadius: "100%",
                                                px: "5px",
                                                m: "1px 1px 1px 1px",
                                                bgcolor: "#006729",
                                                color: "background.default",
                                                position: "absolute",
                                                top: { xs: "2px", sm: "2px" },
                                                right: { xs: "3px", sm: "7px" },
                                                fontSize: "7px",
                                            }}
                                        >{numberOfProducts}</Box>
                                        : null}
                                </Button>

                                <Button
                                    disableRipple
                                    component={Link}
                                    to="/favoriteList"
                                    sx={{
                                        minWidth: "auto",
                                        width: { xs: 36, sm: 44 },
                                        height: { xs: 36, sm: 44 },
                                        p: 0,
                                        bgcolor: "background.paper",
                                        position: "relative",
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                        "&:active": {
                                            boxShadow: "none",
                                        },
                                        "&:focus": {
                                            outline: "none",
                                        }
                                    }}>
                                    <FavoriteIcon
                                        sx={{ fontSize: { xs: 18, sm: 22 },
                                    color: "#e01b7a",}}
                                    />
                                    {numberOfFavorites > 0 ?
                                        <Box
                                            sx={{
                                                borderRadius: "100%",
                                                px: "5px",
                                                m: "1px 1px 1px 1px",
                                                bgcolor: "#E4D00A",
                                                color: "background.default",
                                                position: "absolute",
                                                top: { xs: "2px", sm: "2px" },
                                                right: { xs: "3px", sm: "7px" },
                                                fontSize: "7px",
                                            }}
                                        >{numberOfFavorites}</Box>
                                        : null}
                                </Button>
                                <Button
                                    onClick={()=>navigate("/needConsultation")}
                                    sx={{
                                        bgcolor: "primary.main",
                                        color: "background.default",
                                        py: {
                                            md: "12px",
                                            sm: "6px",
                                        },
                                        px: {
                                            md: "20px",
                                            sm: "14px",
                                        },
                                        whiteSpace: "nowrap",
                                        fontSize: {
                                            xs: "8px",
                                            sm: "12px",
                                            md: "14px"
                                        }
                                    }}
                                >Need a consultation</Button>
                                </Box>

                            </Container>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Dialog
                    open={openCart}
                    onClose={handleCloseCart}
                    maxWidth="md"
                    fullWidth
                    PaperProps={{
                        sx: {
                            borderRadius: "16px",
                            p: 4,
                            minHeight: "400px",
                            position: "relative"
                        },
                    }}
                >
                    <IconButton sx={{width: "20px", position: "absolute", right: "50px"}} onClick={handleCloseCart}>
                        <CloseIcon/>
                    </IconButton>
                    <Cart/>
                </Dialog>
            </>
        );
    };

    export default NavigationBar;