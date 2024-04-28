import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "./logo";
import MenuNav from "./menu";
import SosmedIcon from "./sosmed";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Navbar() {
  const items = [
    {
      icon: <InstagramIcon sx={{ color: "black", fontSize: "2rem", marginRight: "0.5rem" }} />,
      item: "Instagram",
      link: "https://www.instagram.com/damslette3/",
    },
    {
      icon: <XIcon sx={{ color: "black", fontSize: "2rem", marginRight: "0.5rem" }} />,
      item: "Twitter",
      link: "https://twitter.com/MufidRisqi30683",
    },
    {
      icon: <MusicNoteIcon sx={{ color: "black", fontSize: "2rem", marginRight: "0.5rem" }} />,
      item: "Tiktok",
      link: "https://www.tiktok.com/@mufid_risqi",
    },
    {
      icon: <GitHubIcon sx={{ color: "black", fontSize: "2rem", marginRight: "0.5rem" }} />,
      item: "GitHub",
      link: "https://github.com/Mufid-031",
    },
  ];
  const pages = [
    { menu: "Home", link: "/" },
    { menu: "About", link: "/about" },
    { menu: "Project", link: "/project" },
    { menu: "Contact", link: "/contact" },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
   
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
          <SosmedIcon anchorElUser={anchorElUser} handleOpenUserMenu={handleOpenUserMenu} handleCloseUserMenu={handleCloseUserMenu} items={items} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
