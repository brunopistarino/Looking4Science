const categories = [
  {
    id: 1,
    name: "Spheres of the Enviroment",
    imageUrl: null,
    categoryId: null,
  },
  {
    id: 2,
    name: "EOSDIS",
    imageUrl: null,
    categoryId: 1,
  },
  {
    id: 3,
    name: "GIS - Geographic Information Systems",
    imageUrl: null,
    categoryId: 2,
  },
  {
    id: 4,
    name: "Data PathFinders",
    imageUrl: null,
    categoryId: null,
  },
];

const posts = [
  {
    id: 1,
    name: "Commonly Used Aerosol Optical Depth (AOD) Data at a Glance",
    description: "Aerosol optical",
    imageUrl:
      "https://www.earthdata.nasa.gov/sites/default/files/2021-10/AOD_HAQDP.jpg",
    link: "https://www.earthdata.nasa.gov/learn/pathfinders/air-quality-data-pathfinder/find-data#aerosol-data",
    categoryId: 1,
    organization: "NASA",
    date: null,
    location: null,
    likes: null,
    comments: null,
    shares: null,
    views: null,
  },
  {
    id: 2,
    name: "Commonly Used Land Surface Reflectance Data at a Glance",
    description: "Land surface",
    imageUrl:
      "https://www.earthdata.nasa.gov/sites/default/files/2021-10/ozone_HAQDP.jpg",
    link: "https://www.earthdata.nasa.gov/learn/pathfinders/air-quality-data-pathfinder/find-data#land-surface-data",
    categoryId: 2,
    organization: "NASA",
    date: null,
    location: null,
    likes: null,
    comments: null,
    shares: null,
    views: null,
  },
  {
    id: 3,
    name: "Commonly Used Cloud Data at a Glance",
    description: "Clouds form when",
    imageUrl:
      "https://www.earthdata.nasa.gov/sites/default/files/2021-10/health_HAQDP.jpg",
    link: "https://www.earthdata.nasa.gov/learn/pathfinders/air-quality-data-pathfinder/find-data#weather-data",
    categoryId: 2,
    organization: "NASA",
    date: null,
    location: null,
    likes: null,
    comments: null,
    shares: null,
    views: null,
  },
  {
    id: 4,
    name: "Commonly Used Land Surface Reflectance Data at a Glance",
    description: "Land surface reflectance data",
    imageUrl:
      "https://www.earthdata.nasa.gov/sites/default/files/2021-10/Land_AgDP.jpg",
    link: "https://www.earthdata.nasa.gov/learn/pathfinders/agricultural-and-water-resources-data-pathfinder/find-data#land-surface-properties",
    categoryId: 4,
    organization: "NASA",
    date: null,
    location: null,
    likes: null,
    comments: null,
    shares: null,
    views: null,
  },
  {
    id: 5,
    name: "Commonly Used Aboveground Biomass Data at a Glance",
    description: "Vegetation",
    imageUrl:
      "https://www.earthdata.nasa.gov/s3fs-public/2022-05/laser-crops-th.jpg",
    link: "https://www.earthdata.nasa.gov/learn/pathfinders/agricultural-and-water-resources-data-pathfinder/find-data#vegetation",
    categoryId: 1,
    organization: "NASA",
    date: null,
    location: null,
    likes: null,
    comments: null,
    shares: null,
    views: null,
  },
];

const items = [
  {
    id: 1,
    parent_id: null,
    name: "Spheres of the Enviroment",
    link: null,
  },
  {
    id: 2,
    parent_id: 1,
    name: "EOSDIS",
    link: null,
  },
  {
    id: 3,
    parent_id: 2,
    name: "GIS - Geographic Information Systems",
    link: null,
  },
  {
    id: 4,
    parent_id: null,
    name: "Data PathFinders",
    link: null,
  },
  {
    id: -1,
    parent_id: 1,
    name: "Commonly Used Aerosol Optical Depth (AOD) Data at a Glance",
    link: "https://www.earthdata.nasa.gov/learn/pathfinders/air-quality-data-pathfinder/find-data#aerosol-data",
  },
  {
    id: -2,
    parent_id: 2,
    name: "Commonly Used Land Surface Reflectance Data at a Glance",
    link: "https://www.earthdata.nasa.gov/learn/pathfinders/air-quality-data-pathfinder/find-data#land-surface-data",
  },
  {
    id: -3,
    parent_id: 2,
    name: "Commonly Used Cloud Data at a Glance",
    link: "https://www.earthdata.nasa.gov/learn/pathfinders/air-quality-data-pathfinder/find-data#weather-data",
  },
  {
    id: -4,
    parent_id: 4,
    name: "Commonly Used Land Surface Reflectance Data at a Glance",
    link: "https://www.earthdata.nasa.gov/learn/pathfinders/agricultural-and-water-resources-data-pathfinder/find-data#land-surface-properties",
  },
  {
    id: -5,
    parent_id: 1,
    name: "Commonly Used Aboveground Biomass Data at a Glance",
    link: "https://www.earthdata.nasa.gov/learn/pathfinders/agricultural-and-water-resources-data-pathfinder/find-data#vegetation",
  },
];