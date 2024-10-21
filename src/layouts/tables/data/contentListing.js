// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";



const authorsTableData = {
  columns: [
    { name: "content", align: "left" },
    { name: "type", align: "left" },
    { name: "published", align: "center" },
    { name: "date", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      content: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Article on Modern Web Development
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Article
        </ArgonTypography>
      ),
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </ArgonTypography>
      ),
      action: (
        <div >
          <ArgonBadge variant="gradient" badgeContent="Edit" color="secondary" size="xs" style={{ marginRight: '8px' }} container />
          <ArgonBadge variant="gradient" badgeContent="Schedule" color="success" size="xs" container />
        </div>
      ),
    },
    {
      content: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Guide to AI Tools in 2024
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Article
        </ArgonTypography>
      ),
      published: (
        <ArgonBadge variant="gradient" badgeContent="no" color="secondary" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </ArgonTypography>
      ),
      action: (
        <div>
          <ArgonBadge variant="gradient" badgeContent="Edit" color="secondary" size="xs" style={{ marginRight: '8px' }} container />
          <ArgonBadge variant="gradient" badgeContent="Schedule" color="success" size="xs" container />
        </div>
      ),
    },
    {
      content: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Understanding Cloud Infrastructure
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Article
        </ArgonTypography>
      ),
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </ArgonTypography>
      ),
      action: (
        <div>
           <ArgonBadge variant="gradient" badgeContent="Edit" color="secondary" size="xs" style={{ marginRight: '8px' }} container />
          <ArgonBadge variant="gradient" badgeContent="Schedule" color="success" size="xs" container />
        </div>
      ),
    },
    {
      content: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Best Practices in Software Testing
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Article
        </ArgonTypography>
      ),
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          05/08/20
        </ArgonTypography>
      ),
      action: (
        <div>
          <ArgonBadge variant="gradient" badgeContent="Edit" color="secondary" size="xs" style={{ marginRight: '8px' }} container />
          <ArgonBadge variant="gradient" badgeContent="Schedule" color="success" size="xs" container />
        </div>
      ),
    },
    {
      content: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Introduction to Blockchain Technology
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Article
        </ArgonTypography>
      ),
      published: (
        <ArgonBadge variant="gradient" badgeContent="no" color="secondary" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          12/03/21
        </ArgonTypography>
      ),
      action: (
        <div>
         <ArgonBadge variant="gradient" badgeContent="Edit" color="secondary" size="xs" style={{ marginRight: '8px' }} container />
          <ArgonBadge variant="gradient" badgeContent="Schedule" color="success" size="xs" container />
          
        </div>
      ),
    },
  ],

};

export default authorsTableData;
