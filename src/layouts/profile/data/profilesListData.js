// Images
import kal from "assets/images/kal-visuals-square.jpg";
import marie from "assets/images/marie.jpg";
import ivana from "assets/images/ivana-square.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const profilesListData = [
  {
    id: 1,
    image: kal,
    name: "Boost Productivity",
    description: "How to Boost Productivity in..",
    date: "2024-10-20",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "In Review",
    },
  },
  {
    id: 2,
    image: marie,
    name: "Electric Vehicles",
    description: "A deep dive into Electric..",
    date: "2024-10-18",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "In Review",
    },
  },
  {
    id: 3,
    image: ivana,
    name: "Cybersecurity",
    description: "Cybersecurity practices every..",
    date: "2024-10-15",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "In Review",
    },
  },
 
];

export default profilesListData;
