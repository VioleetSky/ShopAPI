import {Box, Typography} from "@mui/material";

function Contacts() {

    const styleHeads = {
        color: "#757575",
        fontWeight: 400,
        fontSize: {

            md: "16px",
            sm: "14px",
        },
        lineHeight: "20px",
        mb: "8px",
        textAlign: {xs: "center", md: "left"}
    }
    const styleBodys = {
        color: "#161616",
        fontSize: {
            lg: "20px",
            md: "16px",
            sm: "16px",
            xs: "12px",
        },
        lineHeight: "20px",
        mb: "40px",
        textAlign: {xs: "center", md: "left"}
    }

    return (
        <Box
            sx={{
                mb: "120px",
                width: "100%",
                px: {xs: 2, md: 0}
            }}
        >
            <Typography
                fontWeight={400}
                fontSize={{xs: 32, md: 40}}
                lineHeight="48px"
                mb="60px"
                sx={{textAlign: "center"}}
            >
                Contacts
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        md: "row",
                        xs: "column"
                    },
                    justifyContent: "center",
                    alignItems: {xs: "center", md: "flex-start"},
                    width: "100%",
                    gap: {xs: 5, md: 15}
                }}>
                <Box sx={{width: {xs: "100%", md: "auto"}}}>
                    <Typography sx={styleHeads}>Address</Typography>
                    <Typography sx={styleBodys}>Zhylianska Street, Kyiv, Ukraine</Typography>

                    <Typography sx={styleHeads}>Working hours</Typography>
                    <Box sx={{mb: "40px"}}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: {xs: 'center', md: 'flex-start'},
                                gap: '10px'
                            }}>
                            <Typography sx={{...styleBodys, mb: "8px"}}>Mon - Fri</Typography>
                            <Typography sx={{...styleBodys, mb: "8px"}}>8:00 AM to 10:00 PM</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: {xs: 'center', md: 'flex-start'},
                            gap: '10px'
                        }}>
                            <Typography sx={{...styleBodys, mb: 0}}>Sat - Sun</Typography>
                            <Typography sx={{...styleBodys, mb: 0}}>8:00 AM to 8:00 PM</Typography>
                        </Box>
                    </Box>

                    <Typography sx={styleHeads}>Email</Typography>
                    <Typography sx={styleBodys}>annadesnenko@gmail.com</Typography>

                    <Typography sx={styleHeads}>Phone number</Typography>
                    <Typography sx={styleBodys}>+38 (097) 737-01-82</Typography>
                </Box>

                <Box sx={{width: {xs: "100%", md: "50%"}, display: "flex", justifyContent: "center"}}>
                    <iframe
                        title="Location: вул. Жилянська, Київ"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.905774229916!2d30.495249615985294!3d50.43966407947762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef10badc3c3%3A0x5159fed7a76d80b2!2sZhylianska%20St%2C%20Kyiv%2C%2002000!5e0!3m2!1suk!2sua!4v1700000000000"
                        width="100%"
                        height="400"
                        style={{border: 0, borderRadius: "16px"}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Box>
            </Box>
        </Box>
    )
}

export default Contacts;