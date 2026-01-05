import { Box, Typography, Container, Chip, Paper } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle'; // ใช้แสดงสถานะ Online

// โลโก้แบบสีขาว (เพื่อให้ตัดกับพื้นหลังมืด)
const logoUrl = "https://placehold.co/600x200/0f172a/ffffff?text=BANWA1+MAINTENANCE&font=montserrat";

export default function DashboardDarkTech() {
  return (
    <Box
      sx={{
        // พื้นหลัง Dark Blue/Slate พร้อม Pattern ตาราง (Grid) จางๆ
        minHeight: '85vh',
        backgroundColor: '#0B1120', 
        backgroundImage: `
          radial-gradient(at 50% 0%, #1e293b 0%, transparent 70%),
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 40px 40px, 40px 40px', // ขนาดตาราง
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* แสง Glow ด้านหลังโลโก้ */}
      <Box 
        sx={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(0,0,0,0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0
        }}
      />

      <Container maxWidth="md" sx={{ zIndex: 1, position: 'relative' }}>
        <Box 
          sx={{ 
            textAlign: 'center',
            animation: 'fadeInUp 1s ease-out' // เพิ่ม Animation ตอนโหลด
          }}
        >
          {/* สถานะระบบ (System Status) */}
          <Chip 
            icon={<CircleIcon sx={{ fontSize: '10px !important', color: '#4ade80 !important' }} />} 
            label="System Operational" 
            variant="outlined"
            sx={{ 
              color: '#94a3b8', 
              borderColor: 'rgba(255,255,255,0.1)', 
              mb: 4,
              backgroundColor: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(4px)'
            }} 
          />

          {/* ส่วนแสดงโลโก้ */}
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Box
              component="img"
              src={logoUrl}
              alt="Plant Maintenance BANWA1"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '180px',
                filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))', // เงาเรืองแสงสีฟ้า
                mb: 2
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ color: '#64748b', letterSpacing: '2px', textTransform: 'uppercase', mt: 3, fontSize: '0.9rem' }}>
            Internal Maintenance Management System
          </Typography>
          
          <Typography variant="caption" sx={{ display:'block', color: '#475569', mt: 8 }}>
            © 2024 BANWA1 Plant. All rights reserved.
          </Typography>

        </Box>
      </Container>
      
      {/* CSS Animation สำหรับการเลื่อนขึ้น */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
}
