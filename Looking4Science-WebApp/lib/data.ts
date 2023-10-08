const posts = [
  //   {
  //     id: 1,
  //     name: "Air Pollution",
  //     description:
  //       "Air pollution is a mixture of solid particles and gases in the air. Car emissions, chemicals from factories, dust, pollen and mold spores may be suspended as particles. Ozone, a gas, is a major part of air pollution in cities. When ozone forms air pollution, it's also called smog. Some air pollutants are poisonous.",
  //     imageUrl:
  //       "https://www.nasa.gov/sites/default/files/thumbnails/image/iss064e005684.jpg",
  //     link: "https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=7664",
  //     categoryId: 1,
  //     organization: "NASA",
  //     date: "2021-10-01",
  //     location: "Earth",
  //     likes: 0,
  //     comments: 0,
  //     shares: 0,
  //     views: 0,
  //   },
  {
    id: 2,
    name: "NASA Invites Media to Upcoming SpaceX Resupply Launch to Space Station",
    description:
      "Media accreditation is open through Oct. 18, 2023, for SpaceX’s 29th commercial resupply mission for NASA to the International Space…",
    imageUrl:
      "https://images-assets.nasa.gov/image/iss056e201248/iss056e201248~large.jpg?w=1536&h=1024&fit=crop&crop=faces%2Cfocalpoint",
    link: "https://www.nasa.gov/news-release/nasa-invites-media-to-upcoming-spacex-resupply-launch-to-space-station/",
    categoryId: 1,
    organization: "NASA",
    date: "2021-10-01",
    location: "Earth",
    likes: 0,
    comments: 0,
    shares: 0,
    views: 0,
  },
  {
    id: 3,
    name: "NASA Airs Coverage of Space Station Research, Development Conference",
    description:
      "NASA will highlight groundbreaking discoveries, benefits for humanity, and how the agency and its commercial and international partners are maximizing…",
    imageUrl:
      "https://www.nasa.gov/wp-content/uploads/2023/07/51710869257_37958c1b6c_o_1.jpg?resize=300,200",
    link: "https://www.nasa.gov/news-release/nasa-airs-coverage-of-space-station-research-development-conference/",
    categoryId: 1,
    organization: "NASA",
    date: "2021-10-01",
    location: "Earth",
    likes: 0,
    comments: 0,
    shares: 0,
    views: 0,
  },
  {
    id: 4,
    name: "NASA to Provide Live Coverage of Space Station Cargo Launch, Docking",
    description:
      "NASA will provide live launch and docking coverage of the Roscosmos Progress 84 cargo spacecraft carrying about three tons of…",
    imageUrl:
      "https://www.nasa.gov/wp-content/uploads/2023/05/iss068e046973large.jpeg?resize=768,431",
    link: "https://www.nasa.gov/news-release/nasa-to-provide-live-coverage-of-space-station-cargo-launch-docking-3/",
    categoryId: 1,
    organization: "NASA",
    date: "2021-10-01",
    location: "Earth",
    likes: 0,
    comments: 0,
    shares: 0,
    views: 0,
  },
  {
    id: 5,
    name: "Smithsonian Latino Museum Students to Hear from NASA Station Astronaut",
    description:
      "Frank Rubio, a NASA astronaut aboard the International Space Station, will speak to students associated with the Smithsonian Institution’s National…",
    imageUrl:
      "https://www.nasa.gov/wp-content/uploads/2023/05/iss068e015480.jpeg?resize=300,200",
    link: "https://www.nasa.gov/news-release/smithsonian-latino-museum-students-to-hear-from-nasa-station-astronaut/",
    categoryId: 1,
    organization: "NASA",
    date: "2021-10-01",
    location: "Earth",
    likes: 0,
    comments: 0,
    shares: 0,
    views: 0,
  },
];

const categories = [
  {
    id: 1,
    name: "Air Pollution",
    imageUrl:
      "https://www.nasa.gov/wp-content/uploads/2023/03/img-8973.webp?resize=2000,1125",
    categoryId: null,
  },
  {
    id: 2,
    name: "Agriculture",
    imageUrl:
      "https://www.nasa.gov/wp-content/uploads/2018/07/174116main_2006_01777_highres.jpg?resize=2000,1600",
    categoryId: null,
  },
  {
    id: 3,
    name: "Climate",
    imageUrl:
      "https://www.nasa.gov/wp-content/uploads/2017/03/psychelongshot0718b_1041x805.jpg",
    categoryId: null,
  },
  {
    id: 4,
    name: "Disasters",
    imageUrl:
      "https://smd-cms.nasa.gov/wp-content/uploads/2023/09/screenshot-2023-09-25-at-3.32.04-pm.png",
    categoryId: null,
  },
  {
    id: 5,
    name: "Energy",
    imageUrl:
      "https://smd-cms.nasa.gov/wp-content/uploads/2023/09/hubble-j025838-potw2251a.jpg",
    categoryId: null,
  },
  {
    id: 6,
    name: "Forests",
    imageUrl:
      "https://www.nasa.gov/wp-content/uploads/2023/09/1-pia26074-sol-899-dust-devil.gif?w=640",
    categoryId: null,
  },
  {
    id: 7,
    name: "Human Health",
    imageUrl:
      "https://www.nasa.gov/wp-content/uploads/2023/03/vcspherepb2.jpg?resize=2000,1333",
    categoryId: null,
  },
  {
    id: 8,
    name: "Oceans",
    imageUrl:
      "https://www.nasa.gov/wp-content/uploads/2023/09/53210646183_c08c1305c8_o.jpg",
    categoryId: null,
  },
  //   {
  //     id: 9,
  //     name: "Water",
  //     imageUrl:
  //       "https://www.earthdata.nasa.gov/s3fs-public/pathfinder/diseases-pathfinder.jpg",
  //     categoryId: null,
  //   },
];

export { posts, categories };

const items = [
  {
    id: 1,
    parent_id: null,
    name: "Air Pollution",
  },
  {
    id: 2,
    parent_id: null,
    name: "Agriculture",
  },
  {
    id: 3,
    parent_id: 2,
    name: "Farming",
  },
  {
    id: 4,
    parent_id: 3,
    name: "Crops",
  },
];
