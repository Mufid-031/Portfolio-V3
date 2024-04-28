import * as React from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function SosmedIcon({
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
  items,
}: React.PropsWithChildren<{
  anchorElUser: null | HTMLElement;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  items: {
    icon: JSX.Element;
    item: string;
    link: string;
  }[];
}>) {
  
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <PersonAddIcon sx={{ color: "white", fontSize: "2rem" }} />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {items.map((item) => (
          <MenuItem key={item.item} onClick={handleCloseUserMenu}>
            {item.icon}
            <Typography textAlign="center">
              <a href={item.link} target="_blank">{item.item}</a>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
