import postRequest from "../utils/ajax";

export function getHomeContent(callback) {
  const url = `http://localhost:8080/getHomeContent`;
  postRequest(url, {}, callback);
}

