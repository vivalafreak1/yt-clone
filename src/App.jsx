import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

export default function App() {
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      Navbar
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </Box>
  </BrowserRouter>;
}
