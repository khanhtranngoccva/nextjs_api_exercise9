import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/",
    headers: {
        "app-id": "650ff258083400e758d02e94",
    }
});

export default instance;
