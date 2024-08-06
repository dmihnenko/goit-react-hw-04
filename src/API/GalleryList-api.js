import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

// const IMAGES_PER_PAGE = 20;
// const cliendID = "FeJntHpVk8b2eiywJebMXpibVIevLqbL59ieFO4Ib0U";

// export const fetchImages = async (topic, page) => {
//   const res = await axios.get(
//     `?query=${topic}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${cliendID}`
//   );

export const fetchImages = async (topic, currentPage) => {
  const res = await axios.get("/search/photos", {
    params: {
      query: topic,
      page: currentPage,
      per_page: 14,
      client_id: "FeJntHpVk8b2eiywJebMXpibVIevLqbL59ieFO4Ib0U",
    },
  });

  return res.data.results;
};
