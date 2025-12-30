import { Box, Typography, Paper } from "@mui/material";

export default function Annual PlanFor2026() {
  return (
    <Box sx={{ height: "100%" }}>
      <Typography variant="h5" fontWeight={600} mb={1}>
        Annual PlanFor2026 Dashboard
      </Typography>

      <Paper sx={{ height: "calc(100vh - 120px)", p: 1 }}>
        <iframe
          title="Annual PlanFor2026 Report"
          src="https://lookerstudio.google.com/embed/reporting/3a960143-c7fb-464a-b66c-ffcce7b20777/page/TWTfF"
          style={{ width: "100%", height: "80%", border: "none" }}
          allowFullScreen
        />
      </Paper>
    </Box>
  );
}
