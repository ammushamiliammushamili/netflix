import axios from "axios";
import { baseURl } from "./constant";
const instance = axios.create({
    baseURL: baseURl
})
export default instance;