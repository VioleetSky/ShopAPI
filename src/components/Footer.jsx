import ApiIcon from '@mui/icons-material/Api';
import { Box, Divider, Typography, Button} from "@mui/material";
import { useNavigate} from "react-router-dom";
import FormForConsultation from "../pages/Consultation/FormForConsultation.jsx";

export default function Footer(){
const navigate = useNavigate();

    return (
        <>
            <FormForConsultation />
        <Box sx={{
            bgcolor: "background.paper",
            mt:"120px",
            mx:0,
            py:"24px",
            px:"40px"
        }}
        >
            <Box
                sx={{
                    pb:"24px"
            }}>
                <ApiIcon/>
            </Box>
            <Divider
                sx={{color: "#E9E9E9"}}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        lg: "row",
                        md: "column",
                        sm: "column",
                        xs: "column"
                    },
                    gap:{
                        xl: "250px",
                        lg: "220px",
                        md: "100px",
                        sm: "50px",
                        xs: "50px"
                    },
                    mt:"40px",
                    mb: "50px"
            }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontSize: {
                                xl: "26px",
                                lg: "24px",
                                md: "24px",
                                sm: "24px",
                                xs: "16px"
                            },
                            fontWeight: 400,
                            pb: "24px"
                    }}
                    >Zhylianska Street, Kyiv, Ukraine
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {
                                xl: "26px",
                                lg: "24px",
                                md: "24px",
                                sm: "24px",
                                xs: "16px"
                            },
                            fontWeight: 400
                    }}
                    >+38 (097) 737-01-82
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {
                                xl: "26px",
                                lg: "24px",
                                md: "24px",
                                sm: "24px",
                                xs: "14px"
                            },
                            fontWeight: 400,
                            pb: "24px"
                    }}
                    >annadesnenko@gmail.com
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: {
                            xl: "row",
                            lg: "row",
                            md: "row",
                            sm: "row",
                            xs: "column"
                        },
                        gap: "8px"
                    }}>
                        <Button
                            component="a"
                            href="https://www.instagram.com/vltskyy/"
                            sx={{
                                bgcolor: "primary.main",
                                color: "background.default",
                                borderRadius: "8px",
                                p: "12px 20px",
                                maxWidth: "119px",
                                maxHeight: "44px",
                        }}
                        >Instagram
                        </Button>
                        <Button
                            component="a"
                            href="https://t.me/vltsky"
                            sx={{
                                bgcolor: "primary.main",
                                color: "background.default",
                                borderRadius: "8px",
                                p: "12px 20px",
                                maxWidth: "119px",
                                maxHeight: "44px",
                        }}
                        >Telegram
                        </Button>
                    </Box>
                </Box>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xl: "row",
                        lg: "row",
                        md: "row",
                        sm: "row",
                        xs: "column"
                    },
                    gap:{
                        xl: "250px",
                        lg: "220px",
                        md: "170px",
                        sm: "50px",
                        xs: "50px"
                    }
                }}
                >
                {/*Pages*/}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        alignItems: "flex-start"
                }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "20px",
                            fontWeight: 400,
                            mb:"12px",
                            ml: "7px"
                    }}
                    >Pages
                    </Typography>
                    <Button
                        onClick={()=>navigate("/")}
                    >Home
                    </Button>
                    <Button
                        onClick={()=> navigate("/catalog")}>
                        Catalog
                    </Button>
                    <Button
                        onClick={()=>navigate("/#categories")}>
                        Categories
                    </Button>
                </Box>


                {/*Information*/}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        alignItems: "flex-start"
                }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "20px",
                            fontWeight: 400,
                            mb:"12px",
                            ml: "7px"
                    }}
                    >Information
                    </Typography>
                    <Button
                        onClick={()=>navigate("/delivery")}
                        sx={{
                            whiteSpace: "nowrap"
                        }}
                    >Delivery and payment
                    </Button>
                    <Button
                        onClick={()=>navigate("/contacts")}
                        sx={{
                            whiteSpace: "nowrap"
                        }}
                    >Contacts
                    </Button>
                </Box>
            </Box>
            </Box>
            <Box>
                <Divider/>
                <Typography
                    sx={{
                        fontSize: {
                        xl: "18px",
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "10px"
                        },
                        fontWeight: 400,
                        color: "#757575",
                        pt: "24px"
                }}
                >Online-store © 2025 All rights reserved.
                </Typography>
            </Box>
        </Box>
        </>
    )
}