import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

const fetchData = async (url) => {
  const data = await axios.get(`${BASE_URL}${url}`);
  return data;
};
export { fetchData };
