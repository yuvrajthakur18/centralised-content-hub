/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";

function Function({ job, org }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="bold" color="text">
        {job}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {org}
      </ArgonTypography>
    </ArgonBox>
  );
}

const ContentTableData = {
  columns: [
    { name: "id", align: "center" },
    { name: "content", align: "left" },
    { name: "type", align: "left" },
    { name: "published", align: "center" },
    { name: "date", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      id: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          16
        </ArgonTypography>
      ),
      content: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Home
        </ArgonTypography>
      ),
      type: <Function job="Content" org="Article" />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          10/08/21
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
      id: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          14
        </ArgonTypography>
      ),
      content: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          About Us
        </ArgonTypography>
      ),
      type: <Function job="Content" org="Article" />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          12/07/21
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
      id: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          18
        </ArgonTypography>
      ),
      content: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Services
        </ArgonTypography>
      ),
      type: <Function job="Content" org="Basic Page" />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="no" color="secondary" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          05/05/22
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
      id: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          19
        </ArgonTypography>
      ),
      content: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Contact
        </ArgonTypography>
      ),
      type: <Function job="Content" org="Article" />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          25/09/22
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
      id: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          33
        </ArgonTypography>
      ),
      content: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Blog
        </ArgonTypography>
      ),
      type: <Function job="Content" org="Article" />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="no" color="secondary" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          17/11/21
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

export default ContentTableData;
