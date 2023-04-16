const baseUrl = "https://api.themoviedb.org/3";
const key = "d3f0ff08a9133da4996a2c4af4e028d4";

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };