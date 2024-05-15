// ***********
// * Importing Site Map Image
// ***********
import siteMapFilePath from "./Reynolds_Forest_Exercise_AllPlots.jpg";

// ***********
// * Importing resources dropdown assets
// ***********

import envReport from "./resources-assets/Reynolds_Exercise_Environmental_and_Soil_Report.pdf";
import aerialImage from "./resources-assets/Reynolds_Exercise_Plots_Point_Locations_Aerial_Map.jpg";

// *****************************
// * Importing images for all plots and it's views
// *****************************

import plot1 from "./images/plot1/Reynolds_Plot1_Center_Photosphere_750_LowSilv_FINAL.jpg";
import plot2 from "./images/plot2/Reynolds_Plot2_Center_Photosphere_500_LowSilv_FINAL.jpg";
import plot3 from "./images/plot3/Reynolds_Plot3_Center_Photosphere_750_HiSilv_FINAL.jpg";
import plot4 from "./images/plot4/Reynolds_Plot4_Center_Photosphere_500_HiSilv_FINAL.jpg";

// *****************************
// * Importing overhead images for all plots
// *****************************
import overheadImage1 from "./images_overhead/Plot1_Annotated_Overhead_Image_100_FT.jpg";
import overheadImage2 from "./images_overhead/Plot2_Annotated_Overhead_Image_100_FT.jpg";
import overheadImage3 from "./images_overhead/Plot3_Annotated_Overhead_Image_100_FT.jpg";
import overheadImage4 from "./images_overhead/Plot4_Annotated_Overhead_Image_100_FT.jpg";

// *****
// * Exporting Project Name
// *****
export const projectName = "Reynolds";

// ***********
// * Table header
// ***********
export const tableHeader = ["Tree #", "Description", "DBH"];

// *****************************
// * Table data for all plots
// *****************************
const plot1_data = [
  {
    treeNumber: "1",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "7.2",
  },
  {
    treeNumber: "2",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "6.5",
  },
  {
    treeNumber: "3",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "9.1",
  },
  {
    treeNumber: "4",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "9.5",
  },
  {
    treeNumber: "5",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "7.7",
  },
  {
    treeNumber: "6",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "4.5",
  },
  {
    treeNumber: "7",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "4.5",
  },
  {
    treeNumber: "8",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "9.5",
  },
  {
    treeNumber: "9",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "8.7",
  },
  {
    treeNumber: "10",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "8.9",
  },
  {
    treeNumber: "11",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "3.4",
  },
  {
    treeNumber: "12",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "6.6",
  },
  {
    treeNumber: "13",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "6.9",
  },
  {
    treeNumber: "14",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "8.7",
  },
];

const plot2_data = [
  {
    treeNumber: "1",
    description: "C4; 500 TPA; Low Silviculture",
    dbh: "8.1",
  },
  {
    treeNumber: "2",
    description: "C4; 500 TPA; Low Silviculture",
    dbh: "8.3",
  },
  {
    treeNumber: "3",
    description: "C4; 750 TPA; Low Silviculture",
    dbh: "8.3",
  },
  {
    treeNumber: "4",
    description: "C4; 500 TPA; Low Silviculture",
    dbh: "8.5",
  },
  {
    treeNumber: "5",
    description: "C4; 500 TPA; Low Silviculture",
    dbh: "8.4",
  },
  {
    treeNumber: "6",
    description: "C4; 500 TPA; Low Silviculture",
    dbh: "8.9",
  },
  {
    treeNumber: "7",
    description: "C4; 500 TPA; Low Silviculture",
    dbh: "7",
  },
  {
    treeNumber: "8",
    description: "C4; 500 TPA; Low Silviculture",
    dbh: "8.9",
  },
  {
    treeNumber: "9",
    description: "C4; 500 TPA; Low Silviculture",
    dbh: "9.3",
  },
  {
    treeNumber: "10",
    description: "C4; 500 TPA; Low Silviculture",
    dbh: "8.2",
  },
];

const plot3_data = [
  {
    treeNumber: "1",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "5.4",
  },
  {
    treeNumber: "2",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "8.6",
  },
  {
    treeNumber: "3",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "8.8",
  },
  {
    treeNumber: "4",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "7.5",
  },
  {
    treeNumber: "5",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "8.5",
  },
  {
    treeNumber: "6",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "9.7",
  },
  {
    treeNumber: "7",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "7.7",
  },
  {
    treeNumber: "8",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "7.9",
  },
  {
    treeNumber: "9",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "6",
  },
  {
    treeNumber: "10",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "7.8",
  },
  {
    treeNumber: "11",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "8.8",
  },
  {
    treeNumber: "12",
    description: "C4; 750 TPA; High Silviculture",
    dbh: "7.6",
  },
];

const plot4_data = [
  {
    treeNumber: "1",
    description: "C4; 500 TPA; High Silviculture",
    dbh: "8.5",
  },
  {
    treeNumber: "2",
    description: "C4; 500 TPA; High Silviculture",
    dbh: "9.1",
  },
  {
    treeNumber: "3",
    description: "C4; 500 TPA; High Silviculture",
    dbh: "8.1",
  },
  {
    treeNumber: "4",
    description: "C4; 500 TPA; High Silviculture",
    dbh: "9.6",
  },
  {
    treeNumber: "5",
    description: "C4; 500 TPA; High Silviculture",
    dbh: "9.4",
  },
  {
    treeNumber: "6",
    description: "C4; 500 TPA; High Silviculture",
    dbh: "8.4",
  },
  {
    treeNumber: "7",
    description: "C4; 500 TPA; High Silviculture",
    dbh: "6.7",
  },
  {
    treeNumber: "8",
    description: "C4; 500 TPA; High Silviculture",
    dbh: "9.3",
  },
  {
    treeNumber: "9",
    description: "C4; 500 TPA; High Silviculture",
    dbh: "6",
  },
];

// *****************************
// * Plot specific data
// *****************************
export const Data = {
  1: {
    youtubeVideoUrl: "https://www.youtube.com/embed/iEUhbZUH3uw",
    tableData: plot1_data,
    center: plot1,
    overheadImage: overheadImage1,
  },
  2: {
    youtubeVideoUrl: "https://www.youtube.com/embed/Ly153Ff6QT8",
    tableData: plot2_data,
    center: plot2,
    overheadImage: overheadImage2,
  },
  3: {
    youtubeVideoUrl: "https://www.youtube.com/embed/zRC9M6h49LI",
    tableData: plot3_data,
    center: plot3,
    overheadImage: overheadImage3,
  },
  4: {
    youtubeVideoUrl: "https://www.youtube.com/embed/bt6Wc0A6kFs",
    tableData: plot4_data,
    center: plot4,
    overheadImage: overheadImage4,
  },
};

// *****************************
// * Plot rotation data
// *****************************
export const plotRotation = {
  center: "0 -1 0 0",
  east: "0 -1 0 3.1415",
  west: "0 -1 0 3.1415",
  north: "0 -1 0 3.1415",
  south: "0 -1 0 3.1415",
};

// *****************************
// * Header buttons data
// *****************************
export const navItems = [
  {
    id: 2,
    title: "Resources",
  },
  {
    id: 3,
    title: "Mobile",
  },
];

// *****************************
// * Resources dropdown data
// *****************************
export const resourcesDropdownItems = [
  {
    id: 1,
    title: "Table",
  },
  {
    id: 2,
    title: "Env report",
    file: envReport,
  },
  {
    id: 3,
    title: "Aerial Image",
    file: aerialImage,
  },
  {
    id: 4,
    title: "Overhead Image",
  },
];

// ***********
// * Exporting Site Map Image
// ***********
export const siteMapImage = siteMapFilePath;
