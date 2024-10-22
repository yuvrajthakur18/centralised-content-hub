import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, Grid, Button, Collapse, IconButton } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const DefaultFormCard = ({ title, themeMode = 'light' }) => {
  const theme = useTheme(); // Access the theme
  const [formData, setFormData] = useState({
    siteName: '',
    siteUrl: '',
    userName: '',
    password: '',
    selectedRule: '',
  });

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log(formData);
  };

  // Dynamic theme colors using theme.palette
  const cardBackgroundColor = themeMode === 'dark' ? theme.palette.background.paper : theme.palette.background.default;
  const cardBorderColor = themeMode === 'dark' ? theme.palette.divider : theme.palette.divider;
  const textColor = themeMode === 'dark' ? theme.palette.white.main: theme.palette.text.primary;
  const inputBackgroundColor = themeMode === 'dark' ? theme.palette.background.default : theme.palette.background.paper;
  const inputBorderColor = theme.palette.divider;
  const focusBorderColor = theme.palette.primary.main;

  return (
    <Card
      style={{
        padding: '24px',
        backgroundColor: cardBackgroundColor,
        borderRadius: '16px',
        boxShadow: theme.shadows[4],
        border: `1px solid ${cardBorderColor}`,
        width: '90%',
        transition: 'background-color 0.3s ease',
      }}
    >
      <CardHeader
        title={title || 'Form Details'}
        action={
          <IconButton onClick={handleExpandClick} aria-expanded={expanded}>
            <ExpandMoreIcon
              style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease',
                color: '#9B7EBD',
              }}
            />
          </IconButton>
        }
        style={{
          fontSize: '20px',
          fontWeight: '600',
          textAlign: 'left',
          color: '#9B7EBD',
        }}
      />
      <CardContent>
        <Grid container spacing={4}>

          {/* Site Name */}
          <Grid item xs={12}>
            <label
              style={{
                display: 'block',
                marginBottom: '2px',
                fontSize: '14px',
                fontWeight: '400',
                color: '#9B7EBD',
              }}
            >
              Site Name
            </label>
            <input
              type="text"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              required
              placeholder="Enter Site Name..."
              style={{
                backgroundColor: inputBackgroundColor,
                borderRadius: '10px',
                padding: '10px',
                width: '100%',
                border: `1px solid ${inputBorderColor}`,
                outline: 'none',
                fontSize: '12px',
                color: '#9B7EBD',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = focusBorderColor)}
              onBlur={(e) => (e.target.style.borderColor = inputBorderColor)}
            />
          </Grid>

          {/* Site URL */}
          <Grid item xs={12}>
            <label
              style={{
                display: 'block',
                marginBottom: '2px',
                fontSize: '14px',
                fontWeight: '400',
                color: '#9B7EBD',
              }}
            >
              Site URL
            </label>
            <input
              type="url"
              name="siteUrl"
              value={formData.siteUrl}
              onChange={handleChange}
              required
              placeholder="Enter Site URL..."
              style={{
                backgroundColor: inputBackgroundColor,
                borderRadius: '10px',
                padding: '10px',
                width: '100%',
                border: `1px solid ${inputBorderColor}`,
                outline: 'none',
                fontSize: '12px',
                color: '#9B7EBD',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = focusBorderColor)}
              onBlur={(e) => (e.target.style.borderColor = inputBorderColor)}
            />
          </Grid>

          {/* Collapsible Content */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Grid container spacing={4} style={{ marginTop: '1px', marginLeft: '6px', width: '99%' }}>
              {/* User Name */}
              <Grid item xs={12}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '2px',
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#9B7EBD',
                  }}
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                  placeholder="Enter User Name..."
                  style={{
                    backgroundColor: inputBackgroundColor,
                    borderRadius: '10px',
                    padding: '10px',
                    width: '100%',
                    border: `1px solid ${inputBorderColor}`,
                    outline: 'none',
                    fontSize: '12px',
                    color: '#9B7EBD',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = focusBorderColor)}
                  onBlur={(e) => (e.target.style.borderColor = inputBorderColor)}
                />
              </Grid>

              {/* Password */}
              <Grid item xs={12}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '2px',
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#9B7EBD',
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter Password..."
                  style={{
                    backgroundColor: inputBackgroundColor,
                    borderRadius: '10px',
                    padding: '10px',
                    width: '100%',
                    border: `1px solid ${inputBorderColor}`,
                    outline: 'none',
                    fontSize: '12px',
                    color: '#9B7EBD',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = focusBorderColor)}
                  onBlur={(e) => (e.target.style.borderColor = inputBorderColor)}
                />
              </Grid>

              {/* Available Rules */}
              <Grid item xs={12}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '2px',
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#9B7EBD',
                  }}
                >
                  Available Rules
                </label>
                <select
                  name="selectedRule"
                  value={formData.selectedRule}
                  onChange={handleChange}
                  style={{
                    backgroundColor: inputBackgroundColor,
                    borderRadius: '10px',
                    padding: '10px',
                    width: '100%',
                    border: `1px solid ${inputBorderColor}`,
                    outline: 'none',
                    fontSize: '12px',
                    color: '#9B7EBD',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = focusBorderColor)}
                  onBlur={(e) => (e.target.style.borderColor = inputBorderColor)}
                >
                  <option value="" disabled>
                    Select Rule
                  </option>
                  <option value="editor">Rule 1</option>
                  <option value="reviewer">Rule 2</option>
                  <option value="admin">Rule 3</option>
                </select>
              </Grid>
            </Grid>
          </Collapse>

          {/* Save Button */}
          <Grid item xs={12}>
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
                backgroundColor: focusBorderColor,
                color: theme.palette.primary.contrastText,
                textTransform: 'none',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s ease',
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

DefaultFormCard.propTypes = {
  title: PropTypes.string,
  themeMode: PropTypes.string,
};

export default DefaultFormCard;
