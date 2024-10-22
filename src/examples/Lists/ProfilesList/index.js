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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonButton from "components/ArgonButton";

function ProfilesList({ title, profiles }) {
  const renderProfiles = profiles.map(({ id, image, name, description, date, action }) => (
    <ArgonBox key={id} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} variant="rounded" shadow="md" />
      </ArgonBox>
      <ArgonBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          ID: {id}
        </ArgonTypography>
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="text">
          {description}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="text" fontWeight="light">
          Date: {new Date(date).toLocaleDateString()}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox ml="auto">
        {action.type === "internal" ? (
          <ArgonButton component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </ArgonButton>
        ) : (
          <ArgonButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </ArgonButton>
        )}
      </ArgonBox>
    </ArgonBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        color: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default ProfilesList;
