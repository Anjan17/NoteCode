import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 10_000,                // 10s request timeout
  withCredentials: true,          // send cookies if your API uses them
  headers: {
    "Content-Type": "application/json",
    "X-App-Name": "my-react-app",
  },
  // Optional: accept only 2xx/304
  validateStatus: (s) => (s >= 200 && s < 300) || s === 304,
});
