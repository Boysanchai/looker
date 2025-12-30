import { Box, Typography, Paper } from "@mui/material";

export default function Watermeter() {
  return (
    <Box sx={{ height: "100%" }}>
      <Typography variant="h5" fontWeight={600} mb={1}>
        Water Meter Dashboard
      </Typography>

      <Paper sx={{ height: "calc(100vh - 120px)", p: 1 }}>
        <iframe
          title="Water Meter"
          src="https://lookerstudio.google.com/embed/reporting/bd720cfe-35ff-416d-a91d-b9c11e8d8546/page/TWTfF"
          style={{ width: "100%", height: "95%", border: "none" }}
          allowFullScreen
        />
      </Paper>
    </Box>
  );
}
