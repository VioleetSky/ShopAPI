import {Card, CardContent, Typography, CardActions, Button, CardMedia, Box, Container} from "@mui/material";
import Rating from "../../components/Rating.jsx";
import {Link} from "react-router-dom";

export default function Banner({product}) {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "primary.main",
                borderRadius: "16px",
                p: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                },
                gap: 3,}}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column-reverse",
                        md: "row",
                    },
                    alignItems: {
                        xs: "center",
                        md: "flex-start",
                    },
                    gap: {
                        xs: 2,
                        sm: 3,
                        md: 4,
                    },}}>
                <CardContent
                    sx={{
                        maxWidth: {
                            xs: "100%",
                            md: "55%",
                        },
                        color: "#9F9F9F",
                        textAlign: {
                            xs: "center",
                            md: "left",
                        },}}>
                    <Typography
                        sx={{
                            color: "background.default",
                            fontSize: {
                                xs: "22px",
                                sm: "26px",
                                md: "32px",
                                lg: "38px",
                                xl: "42px",
                            },
                            fontWeight: 600,
                            pb: 1,}}>
                        {product.title}
                    </Typography>
                    <Typography sx={{ pb: 0.5 }}>
                        {product.brand}
                    </Typography>
                    <Typography sx={{ py: 1 }}>
                        {product.category}
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{fontSize: {
                                xs: "12px",
                                sm: "13px",
                                md: "14px",
                            },}}>
                        {product.description}
                    </Typography>
                    <Rating number={product.rating} />
                </CardContent>
                <Box
                    sx={{
                        bgcolor: "background.default",
                        borderRadius: "12px",
                        p: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: {
                            xs: "100%",
                            sm: "80%",
                            md: "40%",
                        },}}>
                    <CardMedia
                        component="img"
                        image={product.images[0]}
                        alt={product.title}
                        sx={{
                            objectFit: "contain",
                            width: "100%",
                            maxHeight: {
                                xs: 220,
                                sm: 260,
                                md: 320,
                                lg: 350,
                            },}}
                    />
                </Box>
            </Box>
            <CardActions
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                    },
                    justifyContent: {
                        xs: "center",
                        md: "space-between",
                    },
                    alignItems: {
                        xs: "center",
                        md: "flex-start",
                    },
                    gap: 2,
                }}
            >
                <Typography
                    sx={{
                        color: "background.default",
                        fontSize: {
                            xs: "20px",
                            sm: "22px",
                            md: "24px",
                        },
                    }}
                >
                    ${product.price}
                </Typography>

                <Button
                    component={Link}
                    to={`/goods/${product.id}`}
                    sx={{
                        bgcolor: "background.default",
                        color: "primary.main",
                        fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                        },
                        px: {
                            xs: 2,
                            sm: 3,
                        },
                        py: {
                            xs: 1,
                            sm: 1.2,
                        },}}>
                    More details
                </Button>
            </CardActions>
        </Card>
    );

}

