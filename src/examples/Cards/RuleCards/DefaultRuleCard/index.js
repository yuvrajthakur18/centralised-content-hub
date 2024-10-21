import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardContent, Collapse, IconButton, Checkbox, Grid, Typography, Button } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const DefaultRuleCard = ({ title, checkboxData, onSave }) => {
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
      elevation={3} 
      sx={{ borderRadius: 2, padding: 2, marginBottom: 2 }}
    >
      <CardHeader 
        title={title} 
        titleTypographyProps={{ variant: 'h5', color: 'primary' }} 
        sx={{ borderBottom: '1px solid #eee', paddingBottom: 1 }} 
      />
      <CardContent sx={{ padding: '16px 24px' }}>
        {/* Content Section */}
        <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: 1 }}>
          <Grid item>
            <Typography variant="h6" color="textSecondary">Content Types</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => setExpandedContent(!expandedContent)} size="small" color="primary">
              {expandedContent ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Grid>
        </Grid>
        <Collapse in={expandedContent} sx={{ marginBottom: 1 }}>
          <Grid container spacing={1} sx={{ backgroundColor: '#ffffff', padding: 1, borderRadius: 1 }}>
            {formData.contentTypes.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Checkbox
                  checked={item.checked}
                  onChange={() => handleCheckboxChange("contentType", index)}
                  color="secondary"
                /> {item.label}
              </Grid>
            ))}
          </Grid>
        </Collapse>
        {/* Media Types Section */}
        <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: 1 }}>
          <Grid item>
            <Typography variant="h6" color="textSecondary">Media Types</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => setExpandedMedia(!expandedMedia)} size="small" color="primary">
              {expandedMedia ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Grid>
        </Grid>
        <Collapse in={expandedMedia} sx={{ marginBottom: 1 }}>
          <Grid container spacing={1} sx={{ backgroundColor: '#ffffff', padding: 1, borderRadius: 1 }}>
            {formData.mediaTypes.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Checkbox
                  checked={item.checked}
                  onChange={() => handleCheckboxChange("mediaTypes", index)}
                  color="secondary"
                /> {item.label}
              </Grid>
            ))}
          </Grid>
        </Collapse>

        {/* Available Menus Section */}
        <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: 1 }}>
          <Grid item>
            <Typography variant="h6" color="textSecondary">Available Menus</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => setExpandedMenus(!expandedMenus)} size="small" color="primary">
              {expandedMenus ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Grid>
        </Grid>
        <Collapse in={expandedMenus} sx={{ marginBottom: 1 }}>
          <Grid container spacing={1} sx={{ backgroundColor: '#fffff', padding: 1, borderRadius: 1 }}>
            {formData.menus.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Checkbox
                  checked={item.checked}
                  onChange={() => handleCheckboxChange("menus", index)}
                  color="secondary"
                /> {item.label}
              </Grid>
            ))}
          </Grid>
        </Collapse>

        {/* Available Taxonomy Vocabularies Section */}
        <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: 1 }}>
          <Grid item>
            <Typography variant="h6" color="textSecondary">Available Taxonomy</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => setExpandedTaxonomy(!expandedTaxonomy)} size="small" color="primary">
              {expandedTaxonomy ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Grid>
        </Grid>
        <Collapse in={expandedTaxonomy} sx={{ marginBottom: 1 }}>
          <Grid container spacing={1} sx={{ backgroundColor: '#ffffff', padding: 1, borderRadius: 1 }}>
            {formData.taxonomies.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Checkbox
                  checked={item.checked}
                  onChange={() => handleCheckboxChange("taxonomies", index)}
                  color="primary"
                /> {item.label}
              </Grid>
            ))}
          </Grid>
        </Collapse>

        {/* Save Button */}
        <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSave}
              style={{
                padding: '12px 0',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '16px',
                backgroundColor: '#007BFF',
                color: '#fff',
                textTransform: 'none',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'background-color 0.3s ease',
                background:"#669BBC"
              }}
              
            >
              Save
            </Button>
      </CardContent>
    </Card>
  );
};

// Add PropTypes validation
DefaultRuleCard.propTypes = {
  title: PropTypes.string.isRequired,
  checkboxData: PropTypes.shape({
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
};

export default DefaultRuleCard;
