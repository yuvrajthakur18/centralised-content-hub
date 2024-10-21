/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ job, org }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {org}
      </ArgonTypography>
    </ArgonBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "media", align: "left" },
    { name: "type", align: "left" },
    { name: "published", align: "center" },
    { name: "date", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      media: <Author image={team2} name="JohnMichael.jpg" email=" " />,
      type: <Function job="Image" org=" " />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
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
      media: <Author image={team3} name="AlexaLiras.jpg" email=" " />,
      type: <Function job="Image" org=" " />,
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
      media: <Author image={team4} name="LaurentPerrier.jpg" email=" " />,
      type: <Function job="Image" org=" " />,
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
      media: <Author image={team3} name="MichaelLevi.jpg" email=" " />,
      type: <Function job="Image" org=" " />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="yes" color="success" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
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
      media: <Author image={team2} name="RichardGran.jpg" email=" " />,
      type: <Function job="Image" org=" " />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="no" color="secondary" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
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
      media: <Author image={team4} name="MiriamEric.jpg" email=" " />,
      type: <Function job="Image" org=" " />,
      published: (
        <ArgonBadge variant="gradient" badgeContent="no" color="secondary" size="xs" container />
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
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