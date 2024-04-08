import axios from "axios";

const baseDomain = "https://data.data4citizen.jp";
const baseURL = `${baseDomain}/api`;

export default axios.create({
    baseURL
});