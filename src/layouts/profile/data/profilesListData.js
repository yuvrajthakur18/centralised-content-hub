// Images
import kal from "assets/images/kal-visuals-square.jpg";
import marie from "assets/images/marie.jpg";
import ivana from "assets/images/ivana-square.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const profilesListData = [
  {
    image: kal,
    name: "Boost Productivity",
    description: "How to Boost Productivity in..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "In Review",
    },
  },
  {
    image: marie,
    name: "Electric Vehicles",
    description: " A deep dive into Electric..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "In Review",
    },
  },
  {
    image: ivana,
    name: "Cybersecurity",
    description: "cybersecurity practices every..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "In Review",
    },
  },
  {
    image: team4,
    name: "Artificial Intelligence",
    description: "Artificial intelligence is ..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "In Review",
    },
  },
  {
    image: team3,
    name: "Sustainable Fashion",
    description: "A New Era in Retail Explore..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "In Review",
    },
  },
];

export default profilesListData;