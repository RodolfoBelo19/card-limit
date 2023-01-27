import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:3000/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});