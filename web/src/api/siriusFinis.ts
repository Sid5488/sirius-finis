import axios from "axios";

const siriusFinisAPI = axios.create({
  baseURL: "http://localhost:3333/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export { siriusFinisAPI };
