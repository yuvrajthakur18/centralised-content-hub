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

const taxonomyTableData = {
  columns: [
    { name: "taxonomy", align: "left" },
    { name: "type", align: "left" },
    { name: "published", align: "center" },
    { name: "date", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      taxonomy: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Web Development
        </ArgonTypography>
      ),
      type: <Function job="Category" org="Technology" />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          10/06/22
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
      taxonomy: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Artificial Intelligence
        </ArgonTypography>
      ),
      type: <Function job="Category" org="Technology" />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          15/09/21
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
      taxonomy: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Cloud Computing
        </ArgonTypography>
      ),
      type: <Function job="Category" org="Technology" />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="no" color="secondary" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          20/01/22
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
      taxonomy: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          Machine Learning
        </ArgonTypography>
      ),
      type: <Function job="Category" org="Technology" />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          05/12/21
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
      taxonomy: (
        <ArgonTypography variant="caption" fontWeight="bold" padding="10px" color="text">
          DevOps Practices
        </ArgonTypography>
      ),
      type: <Function job="Category" org="Technology" />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="no" color="secondary" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          30/03/21
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

export default taxonomyTableData;

