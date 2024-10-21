
import React, { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import SecondaryDashLayout from "examples/LayoutContainers/SecondaryDashLayout";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import SecondaryNavbar from "examples/Navbars/SecondaryNavbar";
import { TextField, Button, MenuItem, Input, Select, FormControl, InputLabel, Paper } from "@mui/material";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

function Overview() {
  // State to store form data, including image preview URL
  const [formData, setFormData] = useState({
    title: "",
    language: "",
    body: "",
    media: null,
    imagePreview: "", // To store image preview URL
  });


  // Handle form changes including file input
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media") {
      const file = files[0];
      setFormData({ ...formData, media: file });

      // Handle image preview if it's an image
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prevState) => ({
            ...prevState,
            imagePreview: reader.result, // Store the image URL for preview
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };



  return (
    <SecondaryDashLayout> 
    <SecondaryNavbar />    
      
    <ArgonBox pt={5} pb={2} display="flex" justifyContent="space-between" alignItems="center" gap={2}>
      <h4 style={{color:"gray", marginLeft:"4px"}}>Create Basic Page</h4>
    </ArgonBox>

    {/* Form container with styling */}
    <ArgonBox
        p={3}
        border={1}
        borderRadius="lg"
        mt={2}
        mb={5}
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
          borderColor: "#e0e0e0", // Light gray border
        }}
      >
        <Paper elevation={3} sx={{ padding: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Title Input */}
              <Grid item style={{width:"100%"}}>
                <label ><h6 style={{paddingBottom:"8px"}}>Title</h6></label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter title here..."
                  style={{ backgroundColor: "#f9f9f9", borderRadius: "8px", padding:"16px", width:"100%"}}
                />
              </Grid>

              {/* Language Dropdown */}
              <Grid item>
                <label><h6 style={{paddingBottom:"8px"}}>Language</h6></label>
                <select name="language" value={formData.language} onChange={handleChange} style={{ backgroundColor: "#f9f9f9", borderRadius: "8px", padding:"8px", paddingRight:"48px" }} required>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>  
                </select>
              </Grid>

              {/* Body Text Area */}
              <Grid item xs={12}>
                <label><h6 style={{paddingBottom:"8px"}}>Body</h6></label>
                <textarea
                  type="text" 
                  name="body"
                  value={formData.body}
                  onChange={handleChange}
                  required
                  placeholder="Enter body here..."
                  rows={12}
                  style={{ backgroundColor: "#f9f9f9", borderRadius: "8px", padding:"16px", width:"100%"}}
                />
              </Grid>

              {/* Media Upload */}
              <Grid item xs={12}>
                <label><h6 style={{ paddingBottom: "8px" }}>Media</h6></label>
                {/* Hidden File Input */}
                <input
                  type="file"
                  id="media-upload"
                  name="media"
                  accept="image/*"
                  onChange={handleChange}
                  style={{ display: "none" }} // Hide the input
                />

                {/* Custom Button to Trigger File Input */}
                <label
                  htmlFor="media-upload"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#669bbc", // Button background color
                    color: "white",             // Button text color
                    borderRadius: "8px",        // Rounded corners
                    cursor: "pointer",          // Pointer cursor for better UX
                    fontSize: "14px",
                    fontWeight: "bold",
                    border: "1px solid #ddd",
                  }}
                >
                  Choose File
                </label>

                {/* Display the selected file name (optional) */}
                {formData.media && <span style={{ marginLeft: "10px", fontSize: "14px" }}>{formData.media.name}</span>}

                {/* Display the image thumbnail if an image is uploaded */}
                {formData.imagePreview && (
                  <div style={{ marginTop: "10px" }}>
                    <img
                      src={formData.imagePreview}
                      alt="Selected File Preview"
                      style={{
                        width: "150px",
                        height: "auto",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        padding: "5px",
                      }}
                    />
                  </div>
                )}
              </Grid>

              {/* Paragraph Text Area */}
              <Grid item xs={12}>
                <h6 style={{padding:"4px 0 12px 0"}}>Paragraphs</h6>
                <div style={{border: "1px solid #ddd", borderRadius: "8px", padding:"24px"}}>
                  <h6 style={{paddingBottom:"8px", paddingLeft:"0px"}}>Parent Paragraph</h6>
                  <label><h6 style={{paddingBottom:"8px", paddingLeft:"0px", fontWeight:"normal"}}>Plain Text Area</h6></label>
                  <textarea
                    type="text" 
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    required
                    placeholder="Enter body here..."
                    rows={9}
                    style={{ backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "8px", padding:"16px", width:"95%", marginLeft:"0px"}}
                  />

                  <div style={{border: "1px solid #ddd", borderRadius: "8px", margin:"0px 24px 0 24px"}}>
                    <h6 style={{padding: "12px 0px 8px 24px"}}>Child Paragraph</h6>
                    <label><h6 style={{padding: "0px 0px 8px 24px", fontWeight:"normal"}}>Plain Text Area</h6></label>
                    <textarea
                      type="text" 
                      name="body"
                      value={formData.body}
                      onChange={handleChange}
                      required
                      placeholder="Enter body here..."
                      rows={9}
                      style={{ backgroundColor: "#f9f9f9",border: "1px solid #ddd", borderRadius: "8px", padding:"16px", width:"95%", marginLeft:"24px"}}
                    />
                    <label><h6 style={{padding: "0px 0px 8px 24px", fontWeight:"normal"}}>Plain Text Area</h6></label>
                    <textarea
                      type="text" 
                      name="body"
                      value={formData.body}
                      onChange={handleChange}
                      required
                      placeholder="Enter body here..."
                      rows={9}
                      style={{ backgroundColor: "#f9f9f9",border: "1px solid #ddd", borderRadius: "8px", padding:"16px", width:"95%", marginLeft:"24px", marginBottom:"12px"}}
                    />
                  </div>
                </div>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} style={{display:"flex", gap:"10px"}}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: "10px 34px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ color: "white", fontWeight: "bold" }}>Save As </span>
                </Button>
                <select name="language" value={formData.language} onChange={handleChange} style={{ backgroundColor: "#f9f9f9", borderRadius: "8px", padding:"6px 2px 6px 6px" }} required>
                  <option value="en">Draft</option>
                  <option value="es">In Review</option>
                  <option value="fr">Published</option>  
                </select>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </ArgonBox>

      <Footer />
    </SecondaryDashLayout>
  );
}

export default Overview;
