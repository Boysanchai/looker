import { Box, Typography } from "@mui/material";

// *** สำคัญ: เปลี่ยน URL นี้เป็น path ของไฟล์รูปภาพของคุณจริง ๆ ***
// หากรูปภาพอยู่ในโฟลเดอร์ public สามารถใส่เป็น "/images/your-logo.png" ได้เลย
// หรือหาก import มา ก็ให้ใส่ตัวแปรที่ import มาแทนสตริงนี้
const logoUrl = "https://placehold.co/600x200/005792/ffffff?text=Plant+Maintenance+BANWA1&font=roboto";

export default function Dashboard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh', // กำหนดความสูงขั้นต่ำเพื่อให้โลโก้อยู่กลางๆ จอในแนวตั้ง
        p: 3
      }}
    >
      {/* ถ้าต้องการหัวข้อด้านบน ให้ uncomment บรรทัดล่างนี้ */}
      {/* <Typography variant="h4" fontWeight={700} mb={4}>Welcome to Dashboard</Typography> */}

      <Box
        component="img"
        src={logoUrl}
        alt="Plant Maintenance BANWA1 Logo"
        sx={{
          maxWidth: '100%', // ทำให้รูปย่อขยายตามหน้าจอ
          height: 'auto',
          // คุณสามารถปรับขนาดสูงสุดที่ต้องการได้ที่นี่ เช่น:
          // maxHeight: '300px',
          boxShadow: 3, // เพิ่มเงาเล็กน้อยให้ดูมีมิติ (ถ้าชอบแบบแบนๆ ให้ลบบรรทัดนี้)
          borderRadius: 2 // ทำมุมมนเล็กน้อย
        }}
      />
    </Box>
  );
}
