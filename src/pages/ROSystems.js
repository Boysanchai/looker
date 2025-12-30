import { Box, Typography, Paper } from "@mui/material";

export default function ROSystems() {
  return (
    <Box sx={{ height: "100%" }}>
      <Typography variant="h5" fontWeight={600} mb={1}>
        RO Systems Dashboard
      </Typography>

      <Paper sx={{ height: "calc(100vh - 120px)", p: 1 }}>
        <iframe
          title="RO Systems"
          src="https://lookerstudio.google.com/embed/reporting/fa8e19b5-0de5-43bc-8cb2-91f9af167078/page/TWTfF"
          style={{ width: "100%", height: "100%", border: "none" }}
          allowFullScreen
        />
      </Paper>
    </Box>
  );
}
