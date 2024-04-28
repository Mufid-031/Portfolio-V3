import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function MenuNav({
  handleCloseNavMenu,
}: React.PropsWithChildren<{
  handleCloseNavMenu: () => void;
}>) {
  const pathname = usePathname();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <Button className="relative" onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
        <Link className={`${pathname === "/" ? "after:absolute after:bottom-0 after:left-[10px] after:w-11 after:h-1 after:bg-white" : "text-slate-300"}`} href="/">
          Home
        </Link>
      </Button>
      <Button className="relative" onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
        <Link className={`${pathname === "/about" ? "after:absolute after:bottom-0 after:left-[7px] after:w-[51px] after:h-1 after:bg-white" : "text-slate-300"}`} href="/about">
          About
        </Link>
      </Button>
      <Button className="relative" onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
        <Link className={`${pathname === "/project" ? "after:absolute after:bottom-0 after:left-[10px] after:w-[66px] after:h-1 after:bg-white" : "text-slate-300"}`} href="/project">
          Project
        </Link>
      </Button>
      <Button className="relative" onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
        <Link className={`${pathname === "/contact" ? "after:absolute after:bottom-0 after:left-[10px] after:w-[66px] after:h-1 after:bg-white" : "text-slate-300"}`} href="/contact">
          Contact
        </Link>
      </Button>
    </Box>
  );
}
