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

import React, { useState } from 'react';

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button"; // Importing the Button component

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI contexts
import { useArgonController } from "context";

function DetailedStaticsCard({ bgColor, title, count, percentage, icon, direction, onTestConnection }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card>
      <ArgonBox
        bgColor={bgColor === "white" && darkMode ? "transparent" : bgColor}
        variant={bgColor === "white" && darkMode ? "contained" : "gradient"}
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      >
        <ArgonBox p={1.8}>
          <Grid container>
            {direction === "left" ? (
              <Grid item>
                <ArgonBox
                  variant="gradient"
                  bgColor={bgColor === "white" ? icon.color : "white"}
                  color={bgColor === "white" ? "white" : "dark"}
                  width="1rem"
                  height="1rem"
                  borderRadius="section"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {typeof icon.component === "string" ? (
                    <Icon fontSize="small" color="inherit">
                      {icon.component}
                    </Icon>
                  ) : (
                    <ArgonBox
                      fontSize="1.125rem"
                      display="grid"
                      placeItems="center"
                      color="inherit"
                    >
                      {icon.component}
                    </ArgonBox>
                  )}
                </ArgonBox>
              </Grid>
            ) : null}
            <Grid item xs={8}>
              <ArgonBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                <ArgonTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  textTransform="uppercase"
                  fontWeight="medium"
                >
                  {title}
                </ArgonTypography>
                <ArgonTypography
                  variant="h6"
                  fontWeight="light"
                  fontSize="0.70rem"
                  color={bgColor === "white" ? "dark" : "white"}
                  mb={0.5}
                  mt={0.5}
                >
                  <a 
                    href={count} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      color: bgColor === "white" ? "dark" : "white", 
                      textDecoration: 'none', 
                      cursor: 'pointer' // Add a pointer cursor for better UX
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {count}
                  </a>
                </ArgonTypography>
              </ArgonBox>
            </Grid>
            {direction === "right" ? (
              <Grid item xs={4}>
                <ArgonBox
                  variant="gradient"
                  bgColor={bgColor === "white" ? icon.color : "white"}
                  color={bgColor === "white" ? "white" : "dark"}
                  width="1rem"
                  height="1rem"
                  borderRadius="section"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  ml="auto"
                >
                  {typeof icon.component === "string" ? (
                    <Icon fontSize="small" color="inherit">
                      {icon.component}
                    </Icon>
                  ) : (
                    <ArgonBox
                      fontSize="1.125rem"
                      display="grid"
                      placeItems="center"
                      color="inherit"
                    >
                      {icon.component}
                    </ArgonBox>
                  )}
                </ArgonBox>
              </Grid>
            ) : null}
          </Grid>
          <ArgonTypography
            display="flex"
            alignItems="center"
            variant="button"
            fontWeight="bold"
            fontSize="0.8rem"
            color={percentage.color}
          >
            {percentage.count}
            <ArgonTypography
              variant="body2"
              fontWeight="regular"
              fontSize="0.8rem"
              color={bgColor === "white" ? "text" : "white"}
              ml={0.5}
              mt={0.25}
            >
              {percentage.text}
            </ArgonTypography>
          </ArgonTypography>

          {/* Test Connection Button */}
          <Button 
            variant="contained" 
            style={{ 
              backgroundColor: darkMode ? "#5E72E4" : "#F4F6FF", 
              color: darkMode ? "#fff" : "#000", 
              borderColor: darkMode ? "#fff" : "#000", 
              marginTop: '10px', 
              padding: '10px',
              transition: 'all 0.3s ease',
            }}
            size="small" 
            onClick={onTestConnection}
          >
            Test Connection
          </Button>

        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of DetailedStaticsCard
DetailedStaticsCard.defaultProps = {
  bgColor: "white",
  percentage: {
    color: "success",
    count: 0,
    text: "",
  },
  direction: "right",
  onTestConnection: () => {},
};

// Typechecking props for the DetailedStaticsCard
DetailedStaticsCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
  onTestConnection: PropTypes.func,
};

export default DetailedStaticsCard;
