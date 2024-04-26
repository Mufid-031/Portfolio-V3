import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "./logo";
import MenuNav from "./menu";
import SosmedIcon from "./sosmed";

export default function Navbar() {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const pages = ["Home", "About", "Project", "Contact"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [sosmedIcon, setSosmedicon] = React.useState<null | React.ReactElement>(
    <InstagramIcon
      sx={{
        color: "white",
        fontSize: "2rem",
        ":hover": {
          scale: "1.1",
        },
        ":active": {
          scale: "0.9",
        },
      }}
    />
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="bg-valhalla-500 z-50" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo anchorElNav={anchorElNav} handleOpenNavMenu={handleOpenNavMenu} handleCloseNavMenu={handleCloseNavMenu} pages={pages} />
          <MenuNav handleCloseNavMenu={handleCloseNavMenu} />
          <SosmedIcon sosmedIcon={sosmedIcon} anchorElUser={anchorElUser} handleOpenUserMenu={handleOpenUserMenu} handleCloseUserMenu={handleCloseUserMenu} settings={settings} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

