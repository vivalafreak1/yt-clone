import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

import SearchBar from "./SearchBar";
export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <FaYoutube color="red" size={30} />
        <Typography variant="h6" color="white" marginLeft={1}>
          YouTube Clone
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
}
