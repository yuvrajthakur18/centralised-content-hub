/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Centralised Content Hub (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Link from "@mui/material/Link";
import LogoutIcon from "@mui/icons-material/Logout"; 

// Argon Dashboard 2 MUI components
import ArgonButton from "components/ArgonButton";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI context
import { useArgonController } from "context";

// Images
import icon from "assets/images/illustrations/icon-documentation.svg";

function SidenavFooter() {
  const [controller] = useArgonController();
  const { miniSidenav, darkSidenav } = controller;

  return (
    <ArgonBox opacity={miniSidenav ? 0 : 1} sx={{ transition: "opacity 200ms linear" }}>
      {/* <ArgonBox position="relative" textAlign="center">
        
      </ArgonBox> */}
      <ArgonBox display="flex" flexDirection="column">
        <ArgonButton
          component={Link}
          href="#"
          target="_blank"
          rel="noreferrer"
          color="error"
          size="small"
          width="75%"
          mb={2}
          style={{ left:"12.5%" }}
          startIcon={<LogoutIcon />}
        >
          Log Out
        </ArgonButton>
      </ArgonBox>
    </ArgonBox>
  );
}

export default SidenavFooter;
