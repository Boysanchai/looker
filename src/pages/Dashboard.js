import { Grid, Paper, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Overview
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography color="text.secondary">Total Orders</Typography>
            <Typography variant="h4" fontWeight={700}>1,245</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography color="text.secondary">Revenue</Typography>
            <Typography variant="h4" fontWeight={700}>฿45,230</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography color="text.secondary">Pending</Typography>
            <Typography variant="h4" fontWeight={700}>82</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography color="text.secondary">Completed</Typography>
            <Typography variant="h4" fontWeight={700}>1,093</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
