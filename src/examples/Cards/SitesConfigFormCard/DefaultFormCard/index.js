import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Collapse,
  IconButton
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'; // Use an arrow icon for expanding/collapsing

const DefaultFormCard = ({ title }) => {
  const [formData, setFormData] = useState({
    siteName: '',
    siteUrl: '',
    userName: '',
    password: '',
    selectedRule: '',
  });

  const [expanded, setExpanded] = useState(false); // Collapse state

  const handleExpandClick = () => {
    setExpanded(!expanded); // Toggle expand/collapse
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle form submission or save action here
    console.log(formData);
  };

  return (
    <Card style={{
      padding: '24px',
      backgroundColor: '#fefefe',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
      border: '1px solid #e0e0e0',
      width: '90%',
    }}>
      <CardHeader 
        title={title || 'Form Details'} 
        action={
          <IconButton onClick={handleExpandClick} aria-expanded={expanded}>
            <ExpandMoreIcon style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }} />
          </IconButton>
        }
        style={{
          fontSize: '20px',
          fontWeight: '600',
          textAlign: 'center',
          color: '#333'
        }}
      />
      <CardContent>
        <Grid container spacing={4}>

          {/* Site Name */}
          <Grid item xs={12}>
            <label style={{ display: 'block', marginBottom: '2px', fontSize: '14px', fontWeight: '400' }}>
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
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "10px",
                width: "100%",
                border: "1px solid #ddd",
                outline: 'none',
                fontSize: '12px',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = "#007BFF"}
              onBlur={(e) => e.target.style.borderColor = "#ddd"}
            />
          </Grid>

          {/* Site URL */}
          <Grid item xs={12}>
            <label style={{ display: 'block', marginBottom: '2px', fontSize: '14px', fontWeight: '400' }}>
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
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "10px",
                width: "100%",
                border: "1px solid #ddd",
                outline: 'none',
                fontSize: '12px',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = "#007BFF"}
              onBlur={(e) => e.target.style.borderColor = "#ddd"}
            />
          </Grid>

          {/* Collapsible Content */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Grid container spacing={4} style={{ marginTop: '1px', marginLeft: '6px', width:'99%' }}> {/* Added marginLeft for alignment */}

              {/* User Name */}
              <Grid item xs={12}>
                <label style={{ display: 'block', marginBottom: '2px', fontSize: '14px', fontWeight: '400' }}>
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
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "100%",
                    border: "1px solid #ddd",
                    outline: 'none',
                    fontSize: '12px',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#007BFF"}
                  onBlur={(e) => e.target.style.borderColor = "#ddd"}
                />
              </Grid>

              {/* Password */}
              <Grid item xs={12}>
                <label style={{ display: 'block', marginBottom: '2px', fontSize: '14px', fontWeight: '400' }}>
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
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "100%",
                    border: "1px solid #ddd",
                    outline: 'none',
                    fontSize: '12px',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#007BFF"}
                  onBlur={(e) => e.target.style.borderColor = "#ddd"}
                />
              </Grid>

              {/* Available Rules */}
              <Grid item xs={12}>
                <label style={{ display: 'block', marginBottom: '2px', fontSize: '14px', fontWeight: '400' }}>
                  Available Rules
                </label>
                <select
                  name="selectedRule"
                  value={formData.selectedRule}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "100%",
                    border: "1px solid #ddd",
                    outline: 'none',
                    fontSize: '12px',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#007BFF"}
                  onBlur={(e) => e.target.style.borderColor = "#ddd"}
                >
                  <option value="" disabled>Select Rule</option>
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

// Add PropTypes validation
DefaultFormCard.propTypes = {
  title: PropTypes.string,
};

export default DefaultFormCard;
