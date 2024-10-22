// Images
import kal from "assets/images/kal-visuals-square.jpg";
import marie from "assets/images/marie.jpg";
import ivana from "assets/images/ivana-square.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const draftlist = [
  {
    id: 1,
    image: kal,
    name: "Data Analytics",
    description: "Leverage data insights to..",
    date: "2024-10-21",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Draft",
    },
  },
  {
    id: 2,
    image: marie,
    name: "Smart Homes",
    description: "Latest innovations transforming..",
    date: "2024-10-20",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Draft",
    },
  },
  {
    id: 3,
    image: ivana,
    name: "Leadership Skills",
    description: "Leadership qualities to inspire..",
    date: "2024-10-19",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Draft",
    },
  },
  
];

export default draftlist;
