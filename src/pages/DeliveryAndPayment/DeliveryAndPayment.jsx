import { Box, Typography } from "@mui/material";

function DeliveryAndPayment() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                mb: "100px",
                width: "100%",
                px: { xs: 2, md: 0 }
            }}
        >
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    fontSize: { xs: "28px", md: "40px" },
                    textAlign: { xs: "center", md: "left" },
                    fontWeight: 400
                }}
            >
                Delivery and payment
            </Typography>

            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                    variant="h6"
                    sx={{ mb: "24px", fontWeight: 600 }}
                >
                    Delivery
                </Typography>
                <Typography
                    sx={{
                        whiteSpace: 'pre-line',
                        fontSize: "16px",
                        lineHeight: '24px',
                        color: "#424242"
                    }}
                >
                    {`The following delivery methods are available:

– By transport company nationwide (cash on delivery)
– By post (up to 10 kg) nationwide (cash on delivery)
– Pickup from warehouse
– By courier in Kyiv and the surrounding region`}
                </Typography>
            </Box>

            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                    variant="h6"
                    sx={{ mb: "24px", fontWeight: 600 }}
                >
                    Payment
                </Typography>
                <Typography
                    sx={{
                        whiteSpace: 'pre-line',
                        fontSize: "16px",
                        lineHeight: '24px',
                        fontWeight: 400,
                        color: "#424242"
                    }}
                >
                    {`Payment is available in the following ways:
– Cash on delivery, meaning you pay upon receipt (if the shipment was sent by a transport company or UkrPoshta)
– Cash upon pickup and delivery within Kyiv and the Kyiv region
– Bank transfer* (for legal entities)

* After the invoice is issued and our managers confirm payment, you will receive the goods using any of the above methods, along with all accompanying documents.`}
                </Typography>
            </Box>
        </Box>
    );
}

export default DeliveryAndPayment;