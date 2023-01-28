import axios from "axios";

export const api = axios.create({
  baseURL: "https://c32b-152-67-36-52.sa.ngrok.io/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});