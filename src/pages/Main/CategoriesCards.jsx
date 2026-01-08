import {
    useGetCategoryListQuery,
    useGetPostsByCategoryQuery
} from "../../features/slice/apiSlice.jsx";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Skeleton,
    Typography
} from "@mui/material";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
    const { data, isLoading } = useGetPostsByCategoryQuery(category);
    const navigate = useNavigate();

    const randomImage = useMemo(() => {
        if (!data?.products?.length) return null;
        const i = Math.floor(Math.random() * data.products.length);
        return data.products[i];
    }, [data]);

    if (isLoading || !randomImage) {
        return <Skeleton
            variant="rectangular"
            height={260}
            sx={{ borderRadius: 3, width: '100%', maxWidth: 320 }}
            animation="wave"
        />;
    }

    return (
        <Card
            onClick={() => navigate(`/category/${category}`)}
            sx={{
                width: "100%",
                maxWidth: 320,
                height: 260,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 3,
                textAlign: "center",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6
                },
            }}
        >
            <CardContent sx={{ p: 1.5 }}>
                <Typography
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: 12, sm: 14 },
                        wordBreak: "break-word"
                    }}
                >
                    {category.toUpperCase()}
                </Typography>
            </CardContent>

            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 2,
                    pb: 2,
                    overflow: "hidden"
                }}
            >
                <CardMedia
                    component="img"
                    image={randomImage.images[0]}
                    alt={category}
                    sx={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                    }}
                />
            </Box>
        </Card>
    );
};

export default function CategoriesCards() {
    const { data } = useGetCategoryListQuery();

    return (
        <Container
            id="categories"
            sx={{
                width: "100%",
                my: { xs: "60px", md: "120px" },
                px: 2
            }}>

            <Typography
                variant="h2"
                sx={{
                    color: "text.primary",
                    fontSize: { xs: "28px", sm: "34px", md: "40px" },
                    fontWeight: 700,
                    pb: "28px",
                    textAlign: { xs: "center", md: "left" }
                }}
            >
                Categories
            </Typography>

            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="stretch"
            >
                {data &&
                    data.map((item) => (
                        <Grid
                            item
                            key={item}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <CategoryItem category={item} />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
}