import axios from "axios";

const Axios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://172.28.14.87:3382/",
});

export default Axios;
