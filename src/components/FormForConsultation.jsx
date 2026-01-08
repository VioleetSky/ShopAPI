import { Box, Container, Typography, TextField, Button, IconButton, Dialog } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function FormForConsultation() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCloseSubmit = () => {
        setIsSubmitted(false);
        navigate(-1);
    };

    const styleForTextInput = {
        "& .MuiInput-underline:before": { borderBottomColor: "background.default" },
        "& .MuiInput-underline:hover:before": { borderBottomColor: "background.default" },
        "& .MuiInput-underline:after": { borderBottomColor: "background.default" },
        "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.7)" },
        "& .MuiInputLabel-root.Mui-focused": { color: "background.default" },
        "& .MuiInputBase-input": { color: "background.default" },
        width: "100%",
        my: 1
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setForm({ name: "", email: "", phone: "" });
    };

    return (
        <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 0, sm: 2 } }}>
            <Container
                sx={{
                    bgcolor: "primary.main",
                    color: "background.default",
                    borderRadius: { xs: "0px", sm: "24px" },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "center", md: "center" },
                    py: { xs: 5, md: 8 },
                    px: { xs: 3, md: 6 },
                    gap: { xs: 4, md: 10 },
                    maxWidth: "1100px !important"
                }}
            >
                <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: "24px", sm: "32px", md: "40px" },
                            fontWeight: 600,
                            lineHeight: 1.2,
                            mb: 2
                        }}
                    >
                        We will be happy to answer all your questions
                    </Typography>

                    <Typography
                        sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            fontSize: { xs: "14px", md: "16px" },
                            maxWidth: { md: "450px" }
                        }}
                    >
                        Leave a request and we will call you shortly and advise you on all your questions.
                    </Typography>
                </Box>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        maxWidth: "420px",
                    }}
                >
                    <TextField
                        label="Your name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        variant="standard"
                        sx={styleForTextInput}
                    />

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        variant="standard"
                        sx={styleForTextInput}
                    />

                    <TextField
                        label="Phone number"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        variant="standard"
                        sx={styleForTextInput}
                        inputProps={{ pattern: "[0-9+ ]*" }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 4,
                            bgcolor: "background.default",
                            color: "primary.main",
                            py: 1.5,
                            px: 4,
                            borderRadius: "8px",
                            fontWeight: 600,
                            alignSelf: { xs: "stretch", md: "flex-start" },
                            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.9)" }
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Container>

            <Dialog
                open={isSubmitted}
                onClose={handleCloseSubmit}
                maxWidth="xs"
                fullWidth
                PaperProps={{
                    sx: { borderRadius: "16px", p: 4, textAlign: "center" }
                }}
            >
                <IconButton
                    onClick={handleCloseSubmit}
                    sx={{ position: "absolute", right: 16, top: 16 }}
                >
                    <CloseIcon />
                </IconButton>

                <Box sx={{ py: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                        Thank you! :)
                    </Typography>
                    <Typography color="text.secondary">
                        Your consultation request has been successfully sent.
                        Our specialist will contact you shortly.
                    </Typography>
                    <Button
                        onClick={handleCloseSubmit}
                        variant="contained"
                        sx={{ mt: 3, borderRadius: "8px", px: 4 }}
                    >
                        Close
                    </Button>
                </Box>
            </Dialog>
        </Box>
    );
}