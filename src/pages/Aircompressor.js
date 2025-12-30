import { Box, Typography, Paper } from "@mui/material";

export default function AirCompressor() {
  return (
    <Box sx={{ height: "100%" }}>
      <Typography variant="h5" fontWeight={600} mb={1}>
        Air Compressor Dashboard
      </Typography>

      <Paper sx={{ height: "calc(100vh - 120px)", p: 1 }}>
        <iframe
          title="Air Compressor Report"
          src="https://lookerstudio.google.com/embed/reporting/3950ad05-4966-4de7-a06d-5e4c6de7697a/page/TWTfF"
          style={{ width: "100%", height: "95%", border: "none" }}
          allowFullScreen
        />
      </Paper>
    </Box>
  );
}
