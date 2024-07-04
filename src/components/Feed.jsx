import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function Feed() {
  return (
    <Stack sx={{ flexDirecion: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        Sidebar
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#FFF" }}
        >
          Copyright 2024 Arief Taufik Rahman
        </Typography>
      </Box>
    </Stack>
  );
}
