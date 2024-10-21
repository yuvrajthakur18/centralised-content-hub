
// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-mobile-button" style={{ fontSize: "12px" }} />,
    name: "Media",
    description: (
      <>
        900 images,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
        600 Audios,{" "}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
        400 Videos,{" "}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
        534 Files,{" "}
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
    name: "Content",
    description: (
      <>
        120 Basic Pages,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          325 Landing Pages,{" "}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          498 Articles
        </ArgonTypography>
        
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-box-2" style={{ fontSize: "12px" }} />,
    name: "Taxonomy",
    description: (
      <>
        230 Categories,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          40 Tags
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-satisfied" style={{ fontSize: "12px" }} />,
    name: "Menu",
    description: (
      <>
        23 Main,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          40 Footer,{" "}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          40 Sidebar,
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;