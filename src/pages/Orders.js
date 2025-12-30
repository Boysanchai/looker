import { Box, Typography, Paper } from "@mui/material";

export default function Orders() {
  return (
    <Box sx={{ height: "95%" }}>
      <Typography variant="h5" fontWeight={600} mb={1}>
        Orders Dashboard
      </Typography>

      <Paper sx={{ height: "calc(100vh - 120px)", p: 1 }}>
        <iframe
          title="Orders Report"
          src="https://lookerstudio.google.com/embed/reporting/3a960143-c7fb-464a-b66c-ffcce7b20777/page/TWTfF"
          style={{ width: "80%", height: "80%", border: "none" }}
          allowFullScreen
        />
      </Paper>
    </Box>
  );
}
