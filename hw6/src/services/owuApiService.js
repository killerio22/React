import axios from "axios";

import {owuBaseUrl} from "../constants/urls";

const owuApiService = axios.create({baseURL:owuBaseUrl});

export {owuApiService}