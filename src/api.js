// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5297/api", // your ASP.NET API base
});

export default API;
