import dashboardIcon from "../assets/images/home.svg";
import inboxIcon from "../assets/images/direct-inbox.svg";
import lessonIcon from "../assets/images/folder-open.svg";
import taskIcon from "../assets/images/task-square.svg";
import groupIcon from "../assets/images/people.svg";
import prashantPicture from "../assets/images/prashant (502) 2.svg";
import settingIcon from "../assets/images/setting-2.svg";
import logoutIcon from "../assets/images/logout.svg";
import thumb1 from "../assets/images/thumb1.svg";
import thumb2 from "../assets/images/thumb2.svg";
import thumb3 from "../assets/images/thumb3.svg";

export const OverviewItems = [
  {
    name: "Dashboard",
    icon: dashboardIcon,
    routeUrl: "/dashboard",
    selected: false,
  },
  { name: "Inbox", icon: inboxIcon, routeUrl: "", selected: false },
  { name: "Lesson", icon: lessonIcon, routeUrl: "", selected: false },
  { name: "Task", icon: taskIcon, routeUrl: "", selected: false },
  { name: "Group", icon: groupIcon, routeUrl: "", selected: false },
];

export const friendsItems = [
  {
    name: "Prashant",
    role: "Software Developer",
    profilePicture: prashantPicture,
    routeUrl: "",
    selected: false,
  },
  {
    name: "Prashant",
    role: "Software Developer",
    profilePicture: prashantPicture,
    routeUrl: "",
    selected: false,
  },
  {
    name: "Prashant",
    role: "Software Developer",
    profilePicture: prashantPicture,
    routeUrl: "",
    selected: false,
  },
];
export const settingItems = [
  {
    name: "Settings",
    icon: settingIcon,
    red: false,
    selected: false,
  },
  {
    name: "Logout",
    icon: logoutIcon,
    red: true,
    selected: false,
  },
];

export const historyCardItems = [
  { title: "Product Design", progress: "2/8 Watched" },
  { title: "Product Design", progress: "2/8 Watched" },
  { title: "Product Design", progress: "2/8 Watched" },
];

export const continueWatching = [
  {
    title: "Beginner's Guide to becoming a Professional Frontend Developer",
    progressValue: 60,
    imagePath: thumb1,
    profileInfo: [{ name: "Prashant Kumar singh", role: "Software Developer" }],
  },
  {
    title: "Beginner's Guide to becoming a Professional Frontend Developer",
    progressValue: 60,
    imagePath: thumb2,
    profileInfo: [{ name: "Prashant Kumar singh", role: "Software Developer" }],
  },
  {
    title: "Beginner's Guide to becoming a Professional Frontend Developer",
    progressValue: 60,
    imagePath: thumb3,
    profileInfo: [{ name: "Prashant Kumar singh", role: "Software Developer" }],
  },
  {
    title: "Beginner's Guide to becoming a Professional Frontend Developer",
    progressValue: 60,
    imagePath: thumb3,
    profileInfo: [{ name: "Prashant Kumar singh", role: "Software Developer" }],
  },
];
