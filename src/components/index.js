import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { Avatar, Input } from "@mui/material";
import LeftItem from "./leftItem";
import RightItems from "./rightItems";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchIcon from "@mui/icons-material/Search";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
const drawerWidth = 150;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [value, setValue] = React.useState();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        paddingTop: 5,
        height: "60vh",
      }}
    >
      <GridViewOutlinedIcon
        sx={{
          color: "#fe9a75",
          fontSize:35,
          backgroundColor: "#fe9a756e",
          padding: 1,
          borderRadius: 2,
        }}
      />
      <ShowChartRoundedIcon sx={{ color: "#fdbca4", fontSize: 30 }} />
      <TextSnippetOutlinedIcon sx={{ color: "#fdbca4", fontSize: 30 }} />
      <PermIdentityOutlinedIcon sx={{ color: "#fdbca4", fontSize: 30 }} />
      <SettingsOutlinedIcon sx={{ color: "#fdbca4", fontSize: 30 }} />
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#fcf7f5" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: "flex",
          // alignItems:'center',
          justifyContent: "center",
          boxShadow: "none",
          height: 80,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "98%",
            margin: "0 auto",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {" "}
            <Typography
              sx={{
                marginLeft: "1rem",
                fontSize: 30,
                fontWeight: 100,
                color: "#88736e",
              }}
            >
              Welcome back,
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                marginLeft: ".5rem",
                fontSize: 30,
                fontWeight: 800,
                color: "#583c37",
              }}
            >
              Alex
            </Typography>
          </Box>
          <SearchIcon
            sx={{ height: 20, width: 20, position: "absolute", left: 600 }}
          />
          <Input
            className="search"
            placeholder="search"
            sx={{
              borderColor: "#583c37",
              ":active": { borderColor: "red" },
              "::placeholder": { color: "red" },
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FiberManualRecordRoundedIcon
              color="secondary"
              sx={{ fontSize: 15, position: "absolute", top: 22, left: 1146 }}
            />
            <NotificationsNoneRoundedIcon
              sx={{ fontSize: 30, color: "#c9bab6", paddingRight: "3px" }}
            />
            <Avatar src="/assets/blog44.jpeg" />
          </Box>
        </Box>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          backgroundColor: "#fcf7f5",
        }}
        aria-label="mailbox folders"
        // color={"primary"}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          PaperProps={{
            sx: {
              backgroundColor: "#fcf7f5",
            },
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <RadioButtonCheckedOutlinedIcon
            sx={{ fontSize: 60, color: "#583c37", marginTop: "1rem" }}
          />
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: {
              backgroundColor: "#fcf7f5",
              borderRight: "2px solid white",
            },
          }}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            backgroundColor: "#fcf7f5",
          }}
          open
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <RadioButtonCheckedOutlinedIcon
              sx={{ fontSize: 60, color: "#583c37", marginTop: "1rem" }}
            />
          </Box>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#fcf7f5",
          height: "150vh",
        }}
      >
        <RightItems value={value} setValue={setValue} />
        <LeftItem />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
