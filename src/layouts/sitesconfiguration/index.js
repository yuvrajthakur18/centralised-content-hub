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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";



// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import SitesConfigFormCard from "examples/Cards/SitesConfigFormCard/DefaultFormCard";
import DefaultRuleCard from "examples/Cards/RuleCards/DefaultRuleCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";



const bgImage =
  "https://t4.ftcdn.net/jpg/09/27/95/39/240_F_927953950_8udsj8adbeOj9YNvB7Q2G2EPzUHDDjMO.jpg";

function Overview() {
  const checkboxData = {
    contentTypes: [
      { label: "Article", checked: true },
      { label: "Basic Page", checked: true },
      
    ],
    mediaTypes: [
      { label: "Audio", checked: true },
      { label: "File", checked: true },
      { label: "Gallery", checked: false },
      { label: "Image", checked: true },
      { label: "Remote video", checked: false },
      { label: "Video", checked: true },
    ],
    menus: [
      { label: "User account menu", checked: true },
      { label: "Administration", checked: true },
      { label: "Blog menu", checked: true },
      { label: "Custom Menu", checked: true },
      { label: "Development", checked: true },
      { label: "Footer", checked: true },
      { label: "Globally", checked: true },
      { label: "Main navigation", checked: true },
      { label: "Social media menu", checked: true },
      { label: "Tools", checked: true },
    ],
    taxonomies: [
      { label: "Blog Categories", checked: true },
      { label: "Compellingly", checked: true },
    ],
  };

  const handleSave = (formData) => {
    console.log("Saved data: ", formData);
  };


  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <DashboardNavbar />
      <ArgonBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={4}>
            <SitesConfigFormCard title="Site 1" />
          </Grid>
          <Grid item xs={12} xl={4}>
            <SitesConfigFormCard title="Site 2" />
          </Grid>
          <Grid item xs={12} xl={4}>
            <SitesConfigFormCard title="Site 3" />
          </Grid>

        </Grid>
      </ArgonBox>
      <ArgonBox mb={3}>
        <Card>
          <ArgonBox pt={2} px={2}>
            <ArgonBox mb={0.5}>
              <ArgonTypography variant="h6" fontWeight="medium">
                Create Your Rule
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mb={1}>
              <ArgonTypography variant="button" fontWeight="regular" color="text">
                Control, Customise and Personalise Your Content
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
              <DefaultRuleCard title="1st Rule" checkboxData={checkboxData} onSave={handleSave} />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
              <DefaultRuleCard title="2nd Rule" checkboxData={checkboxData} onSave={handleSave} />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
              <DefaultRuleCard title="3rd Rule" checkboxData={checkboxData} onSave={handleSave} />

              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "Add New Rule" }} outlined />
              </Grid>
            </Grid>
          </ArgonBox>
        </Card>
      </ArgonBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
