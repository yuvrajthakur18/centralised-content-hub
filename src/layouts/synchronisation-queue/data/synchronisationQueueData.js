/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";
import Icon from "@mui/material/Icon"; 
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

const synchronisationQueueData = {
  columns: [
    { name: "operation", align: "center" },
    { name: "title", align: "left" },
    { name: "content-type", align: "center" },
    { name: "entity-type", align: "center" },
    { name: "language", align: "center" },
    { name: "entity-id", align: "center" },
    { name: "site-name", align: "center" },
    { name: "created", align: "center" },
    { name: "status", align: "center" },
    { name: "logs", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
        operation: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Created
          </ArgonTypography>  
        ),
        title: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              The future of AI
          </ArgonTypography>
        ),
        "content-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Basic Page
          </ArgonTypography>
        ),
        "entity-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Content
          </ArgonTypography>
        ),
        language: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              English
          </ArgonTypography>
        ),
        "entity-id": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              178
          </ArgonTypography>
        ),
        "site-name": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Remote Site India
          </ArgonTypography>
        ),
        status: (
          <div>
          <ArgonBadge variant="gradient" badgeContent="Awaiting" color="secondary" size="xs" container />
          </div>
        ),
        logs: (
            <ArgonBadge variant="gradient" badgeContent="Logs" color="error" size="xs" container style={{ cursor: "pointer" }} />
        ),
        created: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </ArgonTypography>
        ),
        action: (
            <div>
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">send</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">edit</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">delete</Icon>}  color="#669bbc" size="xs" container />
          </div>
        ),
      },
    {
        operation: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Created
          </ArgonTypography>  
        ),
        title: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              The future of AI
          </ArgonTypography>
        ),
        "content-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Basic Page
          </ArgonTypography>
        ),
        "entity-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Content
          </ArgonTypography>
        ),
        language: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Spanish
          </ArgonTypography>
        ),
        "entity-id": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              178
          </ArgonTypography>
        ),
        "site-name": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Remote Site Spain
          </ArgonTypography>
        ),
        status: (
          <div>
          <ArgonBadge variant="gradient" badgeContent="Awaiting" color="secondary" size="xs" container />
          </div>
        ),
        logs: (
            <ArgonBadge variant="gradient" badgeContent="Logs" color="error" size="xs" container style={{ cursor: "pointer" }} />
        ),
        created: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </ArgonTypography>
        ),
        action: (
            <div>
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">send</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">edit</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">delete</Icon>}  color="#669bbc" size="xs" container />
          </div>
        ),
      },
      {
        operation: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Created
          </ArgonTypography>  
        ),
        title: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              The future of AI
          </ArgonTypography>
        ),
        "content-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Basic Page
          </ArgonTypography>
        ),
        "entity-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Content
          </ArgonTypography>
        ),
        language: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Chinese
          </ArgonTypography>
        ),
        "entity-id": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              178
          </ArgonTypography>
        ),
        "site-name": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Remote Site China
          </ArgonTypography>
        ),
        status: (
          <div>
          <ArgonBadge variant="gradient" badgeContent="Awaiting" color="secondary" size="xs" container />
          </div>
        ),
        logs: (
            <ArgonBadge variant="gradient" badgeContent="Logs" color="error" size="xs" container style={{ cursor: "pointer" }} />
        ),
        created: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </ArgonTypography>
        ),
        action: (
            <div>
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">send</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">edit</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">delete</Icon>}  color="#669bbc" size="xs" container />
          </div>
        ),
      },
      {
        operation: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Created
          </ArgonTypography>  
        ),
        title: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            ai-image.jpg
          </ArgonTypography>
        ),
        "content-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Image
          </ArgonTypography>
        ),
        "entity-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Media
          </ArgonTypography>
        ),
        language: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              English
          </ArgonTypography>
        ),
        "entity-id": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              190
          </ArgonTypography>
        ),
        "site-name": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Remote Site India
          </ArgonTypography>
        ),
        status: (
          <div>
            <ArgonBadge variant="gradient" badgeContent="Awaiting" color="secondary" size="xs" container />
          </div>
        ),
        logs: (
            <ArgonBadge variant="gradient" badgeContent="Logs" color="error" size="xs" container style={{ cursor: "pointer" }} />
        ),
        created: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </ArgonTypography>
        ),
        action: (
            <div>
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">send</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">edit</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">delete</Icon>}  color="#669bbc" size="xs" container />
          </div>
        ),
      },
      {
        operation: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Created
          </ArgonTypography>  
        ),
        title: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              ai-image.jpg
          </ArgonTypography>
        ),
        "content-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Image
          </ArgonTypography>
        ),
        "entity-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Media
          </ArgonTypography>
        ),
        language: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Italian
          </ArgonTypography>
        ),
        "entity-id": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              190
          </ArgonTypography>
        ),
        "site-name": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Remote Site Italy
          </ArgonTypography>
        ),
        status: (
          <div>
          <ArgonBadge variant="gradient" badgeContent="Awaiting" color="secondary" size="xs" container />
          </div>
        ),
        logs: (
            <ArgonBadge variant="gradient" badgeContent="Logs" color="error" size="xs" container style={{ cursor: "pointer" }} />
        ),
        created: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </ArgonTypography>
        ),
        action: (
            <div>
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">send</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">edit</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">delete</Icon>}  color="#669bbc" size="xs" container />
          </div>
        ),
      },
      {
        operation: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Created
          </ArgonTypography>  
        ),
        title: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              ai-voice.mp3
          </ArgonTypography>
        ),
        "content-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Audio
          </ArgonTypography>
        ),
        "entity-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Media
          </ArgonTypography>
        ),
        language: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              English
          </ArgonTypography>
        ),
        "entity-id": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              155
          </ArgonTypography>
        ),
        "site-name": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Remote Site Spain
          </ArgonTypography>
        ),
        status: (
          <div>
          <ArgonBadge variant="gradient" badgeContent="Awaiting" color="secondary" size="xs" container />
          </div>
        ),
        logs: (
            <ArgonBadge variant="gradient" badgeContent="Logs" color="error" size="xs" container style={{ cursor: "pointer" }} />
        ),
        created: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </ArgonTypography>
        ),
        action: (
            <div>
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">send</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">edit</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">delete</Icon>}  color="#669bbc" size="xs" container />
          </div>
        ),
      },
      {
        operation: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Created
          </ArgonTypography>  
        ),
        title: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            ai-image.jpg
          </ArgonTypography>
        ),
        "content-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Image
          </ArgonTypography>
        ),
        "entity-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Media
          </ArgonTypography>
        ),
        language: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              English
          </ArgonTypography>
        ),
        "entity-id": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              190
          </ArgonTypography>
        ),
        "site-name": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Remote Site India
          </ArgonTypography>
        ),
        status: (
          <div>
            <ArgonBadge variant="gradient" badgeContent="Awaiting" color="secondary" size="xs" container />
          </div>
        ),
        logs: (
            <ArgonBadge variant="gradient" badgeContent="Logs" color="error" size="xs" container style={{ cursor: "pointer" }} />
        ),
        created: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </ArgonTypography>
        ),
        action: (
            <div>
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">send</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">edit</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">delete</Icon>}  color="#669bbc" size="xs" container />
          </div>
        ),
      },
      {
        operation: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Created
          </ArgonTypography>  
        ),
        title: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            Ai-categories
          </ArgonTypography>
        ),
        "content-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              CategoriesList
          </ArgonTypography>
        ),
        "entity-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Taxonomy
          </ArgonTypography>
        ),
        language: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              English
          </ArgonTypography>
        ),
        "entity-id": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              222
          </ArgonTypography>
        ),
        "site-name": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Remote Site India
          </ArgonTypography>
        ),
        status: (
          <div>
            <ArgonBadge variant="gradient" badgeContent="Awaiting" color="secondary" size="xs" container />
          </div>
        ),
        logs: (
            <ArgonBadge variant="gradient" badgeContent="Logs" color="error" size="xs" container style={{ cursor: "pointer" }} />
        ),
        created: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </ArgonTypography>
        ),
        action: (
            <div>
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">send</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">edit</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">delete</Icon>}  color="#669bbc" size="xs" container />
          </div>
        ),
      },
      {
        operation: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Created
          </ArgonTypography>  
        ),
        title: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            About Us
          </ArgonTypography>
        ),
        "content-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Main Navigation
          </ArgonTypography>
        ),
        "entity-type": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Menu
          </ArgonTypography>
        ),
        language: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Italian
          </ArgonTypography>
        ),
        "entity-id": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              225
          </ArgonTypography>
        ),
        "site-name": (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              Remote Site Italy
          </ArgonTypography>
        ),
        status: (
          <div>
            <ArgonBadge variant="gradient" badgeContent="Awaiting" color="secondary" size="xs" container />
          </div>
        ),
        logs: (
            <ArgonBadge variant="gradient" badgeContent="Logs" color="error" size="xs" container style={{ cursor: "pointer" }} />
        ),
        created: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </ArgonTypography>
        ),
        action: (
            <div>
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">send</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">edit</Icon>}  color="#669bbc" size="xs" container />
                <ArgonBadge variant="gradient" style={{ marginRight: "4px", cursor: "pointer" }} badgeContent={<Icon fontSize="small">delete</Icon>}  color="#669bbc" size="xs" container />
          </div>
        ),
      },
  ],
};

export default synchronisationQueueData;
