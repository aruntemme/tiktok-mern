import axios from "axios";

const instance = axios.create({
  baseURL: "https://ticktok-mern-backend.herokuapp.com/",
});

export default instance;
