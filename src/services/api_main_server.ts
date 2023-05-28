import axios from "axios";

const mainServer = axios.create({
  baseURL: `http://localhost:8000/api`,
});

export default mainServer;
