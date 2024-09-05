import axios from "axios";
import { SERVER_URL } from "./config";

axios.defaults.baseURL = `${SERVER_URL}`;
axios.defaults.withCredentials = true;

export default axios;
