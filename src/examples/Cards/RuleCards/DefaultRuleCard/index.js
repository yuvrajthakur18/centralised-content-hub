import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Collapse, Checkbox, Grid, Typography, Button, Card, CardHeader, CardContent } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { useTheme } from "@mui/material/styles";

function DefaultRuleCard({ title, checkboxData, onSave, light }) {
  const theme = useTheme(); // Get current theme
  const [expandedContent, setExpandedContent] = useState(false);
  const [expandedMedia, setExpandedMedia] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState(false);
  const [expandedTaxonomy, setExpandedTaxonomy] = useState(false);
  const [formData, setFormData] = useState(checkboxData);

  const handleCheckboxChange = (category, index) => {
    const updatedCategory = formData[category].map((item, idx) =>
      idx === index ? { ...item, checked: !item.checked } : item
    );
    setFormData({ ...formData, [category]: updatedCategory });
  };

  const handleSave = () => {
    onSave(formData); // Pass the updated form data to the parent or save it elsewhere
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        padding: 2,
        marginBottom: 2,
        backgroundColor: light ? theme.palette.background.default : "transparent",
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[3],
      }}
    >
      <CardHeader
        title={title}
        sx={{
          paddingBottom: 1,
          color: light ? theme.palette.white.main : theme.palette.text.primary,
        }}
      />
      <CardContent>
        <ArgonBox>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" my={1}>
            <Typography variant="h6">Content Types</Typography>
            <IconButton
              onClick={() => setExpandedContent(!expandedContent)}
              size="small"
              sx={{
                color: light ? theme.palette.white.main : theme.palette.primary.main,
              }}
            >
              {expandedContent ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ArgonBox>
          <Collapse in={expandedContent}>
            <ArgonBox p={2}>
              {formData.contentTypes.map((item, index) => (
                <Grid container key={index} alignItems="center" sx={{ marginBottom: 1 }}>
                  <Checkbox
                    checked={item.checked}
                    onChange={() => handleCheckboxChange("contentTypes", index)}
                    sx={{ color: light ? theme.palette.white.main : theme.palette.primary.main }}
                  />
                  <ArgonTypography>{item.label}</ArgonTypography>
                </Grid>
              ))}
            </ArgonBox>
          </Collapse>
        </ArgonBox>

        <ArgonBox>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" my={1}>
            <Typography variant="h6">Media Types</Typography>
            <IconButton
              onClick={() => setExpandedMedia(!expandedMedia)}
              size="small"
              sx={{
                color: light ? theme.palette.white.main : theme.palette.primary.main,
              }}
            >
              {expandedMedia ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ArgonBox>
          <Collapse in={expandedMedia}>
            <ArgonBox p={2}>
              {formData.mediaTypes.map((item, index) => (
                <Grid container key={index} alignItems="center" sx={{ marginBottom: 1 }}>
                  <Checkbox
                    checked={item.checked}
                    onChange={() => handleCheckboxChange("mediaTypes", index)}
                    sx={{ color: light ? theme.palette.white.main : theme.palette.primary.main }}
                  />
                  <ArgonTypography>{item.label}</ArgonTypography>
                </Grid>
              ))}
            </ArgonBox>
          </Collapse>
        </ArgonBox>

        <ArgonBox>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" my={1}>
            <Typography variant="h6">Available Menus</Typography>
            <IconButton
              onClick={() => setExpandedMenus(!expandedMenus)}
              size="small"
              sx={{
                color: light ? theme.palette.white.main : theme.palette.primary.main,
              }}
            >
              {expandedMenus ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ArgonBox>
          <Collapse in={expandedMenus}>
            <ArgonBox p={2}>
              {formData.menus.map((item, index) => (
                <Grid container key={index} alignItems="center" sx={{ marginBottom: 1 }}>
                  <Checkbox
                    checked={item.checked}
                    onChange={() => handleCheckboxChange("menus", index)}
                    sx={{ color: light ? theme.palette.white.main : theme.palette.primary.main }}
                  />
                  <ArgonTypography>{item.label}</ArgonTypography>
                </Grid>
              ))}
            </ArgonBox>
          </Collapse>
        </ArgonBox>

        <ArgonBox>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" my={1}>
            <Typography variant="h6">Available Taxonomies</Typography>
            <IconButton
              onClick={() => setExpandedTaxonomy(!expandedTaxonomy)}
              size="small"
              sx={{
                color: light ? theme.palette.white.main : theme.palette.primary.main,
              }}
            >
              {expandedTaxonomy ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ArgonBox>
          <Collapse in={expandedTaxonomy}>
            <ArgonBox p={2}>
              {formData.taxonomies.map((item, index) => (
                <Grid container key={index} alignItems="center" sx={{ marginBottom: 1 }}>
                  <Checkbox
                    checked={item.checked}
                    onChange={() => handleCheckboxChange("taxonomies", index)}
                    sx={{ color: light ? theme.palette.white.main : theme.palette.primary.main }}
                  />
                  <ArgonTypography>{item.label}</ArgonTypography>
                </Grid>
              ))}
            </ArgonBox>
          </Collapse>
        </ArgonBox>

        <ArgonBox mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            fullWidth
            sx={{
              borderRadius: "10px",
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: light ? theme.palette.white.main : theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Save
          </Button>
        </ArgonBox>
      </CardContent>
    </Card>
  );
}

DefaultRuleCard.propTypes = {
  title: PropTypes.string.isRequired,
  checkboxData: PropTypes.shape({
    contentTypes: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      })
    ).isRequired,
    mediaTypes: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      })
    ).isRequired,
    menus: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      })
    ).isRequired,
    taxonomies: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  light: PropTypes.bool,
};

export default DefaultRuleCard;
