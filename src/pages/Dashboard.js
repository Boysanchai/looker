import { Box, Typography, Paper, Container, Stack, Button } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard'; // อิมพอร์ตไอคอนมาตกแต่งเพิ่ม (ถ้ามี mui/icons)

// *** สำคัญ: เปลี่ยน URL นี้เป็น path ของไฟล์รูปภาพของคุณจริง ๆ ***
// สมมติว่าเป็นโลโก้ที่มีพื้นหลังโปร่งใส (PNG) จะสวยที่สุด
const logoUrl = "https://placehold.co/500x150/ffffff/005792?text=Plant+Maintenance+BANWA1&font=roboto";

export default function StylishDashboard() {
  return (
    // 1. พื้นหลังแบบไล่เฉดสี (Gradient Background) สีนุ่มๆ
    <Box
      sx={{
        minHeight: '80vh', // ให้เต็มความสูงหน้าจอโดยประมาณ
        background: 'linear-gradient(135deg, #e0f2f1 0%, #eef2f3 100%)', // ฟ้าอ่อน -> เทาอ่อน
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
        borderRadius: 4, // ทำมุมมนให้พื้นที่ทำงานหลัก
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          
          {/* ข้อความทักทายด้านบน */}
          <Stack alignItems="center" spacing={1}>
            <Typography 
              variant="h3" 
              component="h1" 
              fontWeight={800} 
              color="primary.dark"
              sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
            >
              Welcome
            </Typography>
            <Typography variant="h6" color="text.secondary" fontWeight={400}>
              Internal Maintenance Management System
            </Typography>
          </Stack>

          {/* 2. กล่องใส่โลโก้แบบ Glassmorphism (กระจกฝ้า) */}
          <Paper
            elevation={0}
            sx={{
              p: 5,
              width: '100%',
              maxWidth: 600,
              textAlign: 'center',
              // เทคนิคทำกระจกฝ้า
              background: 'rgba(255, 255, 255, 0.4)', 
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              borderRadius: 5, // มุมมนเยอะหน่อย ดูนุ่มนวล
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', // เงาฟุ้งๆ
            }}
          >
            <Box
              component="img"
              src={logoUrl}
              alt="Plant Maintenance BANWA1 Logo"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '120px', // จำกัดความสูงไม่ให้ใหญ่เกินไป
                // เพิ่ม filter เล็กน้อยเพื่อให้รูปดูเคลียร์ (ถ้าเป็น PNG)
                filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.1))',
              }}
            />
          </Paper>

          {/* เพิ่มปุ่ม Action ด้านล่าง เพื่อให้หน้าจอดูมีอะไรทำ (Optional) */}
          {/* <Button 
            variant="contained" 
            size="large" 
            startIcon={<DashboardIcon />}
            sx={{ 
              borderRadius: 10, 
              px: 4, py: 1.5,
              boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)'
            }}
          >
            Go to Main Dashboard
          </Button> 
          */}

        </Stack>
      </Container>
    </Box>
  );
}
